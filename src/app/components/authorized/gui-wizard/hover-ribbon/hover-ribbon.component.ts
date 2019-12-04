import { Component, ViewContainerRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hover-ribbon',
  templateUrl: './hover-ribbon.component.html',
  styleUrls: ['./hover-ribbon.component.scss']
})
export class HoverRibbonComponent {
  @Output() onDestructiveAction: EventEmitter<any> = new EventEmitter<any>();

  destructiveAction() {
    console.log('destructive action');
    this.onDestructiveAction.emit();
  }
}
