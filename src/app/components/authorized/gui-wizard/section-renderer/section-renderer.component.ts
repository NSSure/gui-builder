import { Component, Input, EventEmitter, Output } from '@angular/core';
import Section from 'src/app/models/Section';

@Component({
  selector: 'section-renderer',
  templateUrl: './section-renderer.component.html',
  styleUrls: ['./section-renderer.component.scss']
})
export class SectionRendererComponent {
  @Input() sectionId: string;
  @Input() html: string;

  @Output() onSectionRemoved: EventEmitter<string> = new EventEmitter<string>();

  displaySectionRibbon: boolean = false;

  mouseEnter() {
    this.displaySectionRibbon = true;
  }

  mouseLeave() {
    this.displaySectionRibbon = false;
  }

  removeSection() {
    console.log(this.sectionId);
    this.onSectionRemoved.emit(this.sectionId);
  }
}
