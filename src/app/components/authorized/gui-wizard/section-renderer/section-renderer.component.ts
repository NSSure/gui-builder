import { Component, Input, EventEmitter, Output, ViewChild, ViewRef, ViewChildren } from '@angular/core';
import Section from 'src/app/models/Section';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'section-renderer',
  templateUrl: './section-renderer.component.html',
  styleUrls: ['./section-renderer.component.scss']
})
export class SectionRendererComponent {
  @Input() section: Section;

  @Output() onRibbonEnabled: EventEmitter<Section> = new EventEmitter<Section>();

  @Output() onSectionRemoved: EventEmitter<Section> = new EventEmitter<Section>();

  @Output() onEditContent: EventEmitter<Section> = new EventEmitter<Section>();
  @Output() onEditHtml: EventEmitter<Section> = new EventEmitter<Section>();

  @Output() onSectionTop: EventEmitter<Section> = new EventEmitter<Section>();
  @Output() onSectionBottom: EventEmitter<Section> = new EventEmitter<Section>();
  @Output() onSectionUp: EventEmitter<Section> = new EventEmitter<Section>();
  @Output() onSectionDown: EventEmitter<Section> = new EventEmitter<Section>();
  
  isHoveringSection: boolean = false;
  displaySectionRibbon: boolean = false;

  enableRibbon() {
    this.displaySectionRibbon = true;
    this.onRibbonEnabled.emit(this.section);
  }

  mouseEnter() {
    this.isHoveringSection = true;
  }

  mouseLeave() {
    this.isHoveringSection = false;
  }
}
