import { Component, QueryList, ElementRef, AfterViewInit, ViewChildren, ViewChild, ComponentFactoryResolver, ViewContainerRef, ComponentFactory, ComponentRef } from '@angular/core';
import { SectionService } from 'src/app/services/section.service';
import { SectionRendererComponent } from './section-renderer/section-renderer.component';

@Component({
  selector: 'gui-wizard',
  templateUrl: './gui-wizard.component.html',
  styleUrls: ['./gui-wizard.component.scss']
})
export class GuiWizardComponent implements AfterViewInit {
  @ViewChildren('section') sectionElements: QueryList<ElementRef>;
  @ViewChild('dropArea', { static: true }) dropArea: ElementRef;
  @ViewChild('sectionContainer', { static: true, read: ViewContainerRef }) sectionContainer;

  sections: Array<any> = [];

  constructor(private _sectionService: SectionService, private _resolver: ComponentFactoryResolver) {
    this._sectionService.listSections().subscribe((sections) => {
      this.sections = sections;
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
    let sectionId: string = event.target.id.split('section_')[1];
    event.dataTransfer.setData('text/plain', sectionId);
  }

  onDragOver(event) {
    event.preventDefault();
  }

  onDrop(event) {
    const id = event.dataTransfer.getData('text');

    this._sectionService.getHtml(id).subscribe((html) => {
      const factory: ComponentFactory<SectionRendererComponent> = this._resolver.resolveComponentFactory(SectionRendererComponent);
      let componentRef: ComponentRef<SectionRendererComponent> = this.sectionContainer.createComponent(factory);

      componentRef.instance.html = html;
  
      // let sectionFragment = document.createRange().createContextualFragment(html);

      // let containingElement: HTMLElement = document.createElement('div');

      // // Style container element that contains the section html.
      // containingElement.classList.add('section-container');
      // containingElement.style.border = '1px solid lightskyblue';
      // containingElement.style.padding = '15px';

      // containingElement.onmouseover = (event) => {
      //   let element: HTMLElement = event.target as HTMLElement;
      //   element.style.backgroundColor = "#000000";
      // }

      // // Append the section html fragment to the container.
      // containingElement.appendChild(sectionFragment);

      // this.dropArea.nativeElement.appendChild(containingElement);
    });

    event.dataTransfer.clearData();
  }
}
