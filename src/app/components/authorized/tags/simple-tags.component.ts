import { Component, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'simple-tags',
  templateUrl: './simple-tags.component.html',
  styleUrls: ['./simple-tags.component.scss']
})
export class SimpleTagsComponent implements AfterViewInit {
  @Input() containerClass: string;
  @Input() isFocused: boolean = false;
  @Input() tags: Array<any> = new Array();

  @ViewChild("tagContainer", { static: true }) tagContainer: ElementRef;
  @ViewChild("tagEnterArea", { static: true }) tagEnterArea: ElementRef;

  nativeTagContainer: HTMLElement;
  nativeTagEnterArea: HTMLElement;

  ngAfterViewInit() {
    this.nativeTagContainer = this.tagContainer.nativeElement;
    this.nativeTagEnterArea = this.tagEnterArea.nativeElement;

    this.nativeTagEnterArea.addEventListener('keydown', (event) => {
      console.log(event.keyCode);
      if (event.keyCode === 188) {
        this.convertToTag();
      }
    });

    this.nativeTagEnterArea.addEventListener('focusout', (event) => {
      this.nativeTagContainer.classList.remove('focused');
    })

    this.tags.push({ text: 'Tag #1' });
    this.tags.push({ text: 'Tag #2' });
    this.tags.push({ text: 'Tag #3' });
    this.tags.push({ text: 'Tag #4' });
    this.tags.push({ text: 'Tag #5' });
  }

  private tagContainerFocused() {
    this.nativeTagEnterArea.focus();
    this.nativeTagContainer.classList.add('focused');
  }

  private convertToTag() {
    let textNode: ChildNode = null;

    this.nativeTagEnterArea.childNodes.forEach((childNode) => {
      if (childNode.nodeType === 3) {
        textNode = childNode;
      }
    })

    this.tags.push({
      text: textNode.nodeValue
    });

    textNode.nodeValue = '';
  }
}
