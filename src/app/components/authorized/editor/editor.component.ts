import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, Renderer, HostListener, Input, Output, EventEmitter } from '@angular/core';
import Section from 'src/app/models/Section';

import 'brace';
import 'brace/mode/html';
import 'brace/theme/github';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements AfterViewInit {
  _content: string;

  get content(): string {
    this.onContentChanged.emit(this._content);
    return this._content;
  }

  @Input()
  set content(value: string) {
    this._content = value;
  }

  @Output() onContentChanged = new EventEmitter<string>();

  @ViewChild('editorComponent', { static: true }) editorComponent: ElementRef;
  @ViewChild('editor', { static: true }) editor: ElementRef;

  options: any = { maxLines: 10000, minLines: 10, printMargin: false };
  loaded: boolean = false;

  calculatedHeight: number = 0;

  section: Section = new Section();

  constructor(private _renderer: Renderer) {

  }

  ngAfterViewInit() {
    console.log('after editor init');
    setTimeout(() => {
      this.calculateEditorHeight();
    });
  }

  calculateEditorHeight(): void {
    console.log(this.editorComponent.nativeElement.clientHeight);
    let editorComponentHeight: number = this.editorComponent.nativeElement.clientHeight - this.calculateElementSpaceHeight(this.editorComponent.nativeElement);
    this._renderer.setElementStyle(this.editor.nativeElement, 'height', editorComponentHeight.toString());
  }

  calculateElementSpaceHeight(nativeElement: Element): number {
    let computedStyle: CSSStyleDeclaration = window.getComputedStyle(nativeElement);

    let computedHeight: number = 0;

    computedHeight += parseInt(computedStyle.marginTop);
    computedHeight += parseInt(computedStyle.marginBottom);
    computedHeight += parseInt(computedStyle.paddingTop);
    computedHeight += parseInt(computedStyle.paddingBottom);

    return computedHeight;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    this.calculateEditorHeight();
  }
}
