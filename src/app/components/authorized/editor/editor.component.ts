import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, Renderer, HostListener } from '@angular/core';

import 'brace';
import 'brace/mode/html';
import 'brace/theme/github';
import { ActivatedRoute } from '@angular/router';
import Section from 'src/app/models/Section';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, AfterViewInit {
  @ViewChild('editorComponent', { static: true }) editorComponent: ElementRef;
  @ViewChild('editorRibbon', { static: true }) editorRibbon: ElementRef;
  @ViewChild('editor', { static: true }) editor: ElementRef;

  text: string = "";
  options: any = { maxLines: 1000, printMargin: false };
  loaded: boolean = false;

  calculatedHeight: number = 0;

  section: Section = new Section();

  constructor(private _renderer: Renderer, private _activatedRoute: ActivatedRoute, private _sectionService: SectionService) {

  }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params) => {
      if (params.sectionId) {
        this._sectionService.get(params.sectionId).subscribe((section) => this.section = section);
      }
    })
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.calculateEditorHeight();
    });
  }

  calculateEditorHeight(): void {
    let editorRibbonHeight: number = this.editorRibbon.nativeElement.clientHeight - this.calculateElementSpaceHeight(this.editorRibbon.nativeElement)
    let editorComponentHeight: number = this.editorComponent.nativeElement.clientHeight - this.calculateElementSpaceHeight(this.editorComponent.nativeElement);

    let calcuatedEditorHeight: number = (editorComponentHeight - editorRibbonHeight);

    console.log(calcuatedEditorHeight)

    this._renderer.setElementStyle(this.editor.nativeElement, 'min-height', `${calcuatedEditorHeight - 65}px`);
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

  addNewSection() {
    this._sectionService.processNewSection(this.section).subscribe();
  }
}
