import { Component, QueryList, ElementRef, AfterViewInit, ViewChildren, ViewChild } from '@angular/core';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'gui-wizard',
  templateUrl: './gui-wizard.component.html',
  styleUrls: ['./gui-wizard.component.scss']
})
export class GuiWizardComponent implements AfterViewInit {
  @ViewChildren('section') sectionElements: QueryList<ElementRef>;
  @ViewChild('dropArea', { static: true }) dropArea: ElementRef;

  mySections: Array<any> = [];

  constructor(private _sectionService: SectionService) {
    this._sectionService.listMySections().subscribe((mySections) => {
      this.mySections = mySections;
      console.log(this.mySections);
    });
  }

  ngAfterViewInit() {
    this.sectionElements.toArray().forEach((sectionElement: ElementRef) => {
      let nativeElement: HTMLElement = sectionElement.nativeElement;

      nativeElement.ondragstart = this.onDragStart;
      nativeElement.ondrop = this.onDrop;
    });

    this.dropArea.nativeElement.ondragover = (event) => this.onDragOver(event);
    this.dropArea.nativeElement.ondrop = (event) => this.onDrop(event);
  }

  onDragStart(event) {
    let sectionId: number = parseInt(event.target.id.split('section-')[1]);
    console.log(sectionId);
    event.dataTransfer.setData('text/plain', sectionId);
    // event.currentTarget.style.backgroundColor = 'yellow';
    console.log(event);
  }

  onDragOver(event) {
    event.preventDefault();
    console.log(event);
  }

  onDrop(event) {
    const id = event.dataTransfer.getData('text');

    this._sectionService.getSectionById(id).subscribe((section) => {
      let draggableElementRef: ElementRef = this.sectionElements.find(x => x.nativeElement.id === id);

      // var sectionHtml = new DOMParser().parseFromString(section.html, "text/xml");
      let sectionFragment = document.createRange().createContextualFragment(section.html);

      let containingElement: HTMLElement = document.createElement('div');

      containingElement.classList.add('section-container');
      containingElement.appendChild(sectionFragment);
      containingElement.style.border = '1px solid yellow';
      containingElement.style.padding = '15px';

      this.dropArea.nativeElement.appendChild(containingElement);
    });

    event.dataTransfer.clearData();

    console.log(event);
  }
}
