import { Component, QueryList, ElementRef, AfterViewInit, ViewChildren, ViewChild, ComponentFactoryResolver, ViewContainerRef, ComponentFactory, ComponentRef, ViewRef, ContentChildren } from '@angular/core';
import { SectionService } from 'src/app/services/section.service';
import { SectionRendererComponent } from './section-renderer/section-renderer.component';
import ToastManager from 'src/app/common/toast';
import Section from 'src/app/models/Section';
import { deepEqual } from 'fast-equals';
import copy from 'src/app/common/copy';
import { GuiWizadService } from 'src/app/services/local/gui-wizard.service';

@Component({
  selector: 'gui-wizard',
  templateUrl: './gui-wizard.component.html',
  styleUrls: ['./gui-wizard.component.scss', '../../../../global-component-styles.scss'],
  providers: [GuiWizadService]
})
export class GuiWizardComponent implements AfterViewInit {
  @ViewChildren('section') sectionElements: QueryList<ElementRef>;
  @ViewChild('dropArea', { static: true }) dropArea: ElementRef;

  @ViewChild('designItems', { static: true, read: ViewContainerRef }) designItems: ViewContainerRef;

  sectionRenderers: Array<ComponentRef<SectionRendererComponent>> = new Array();

  hasSections: boolean = false;
  isEditHtml: boolean = false;
  designHtml: string = '';

  toastManager: ToastManager = new ToastManager({
    enableManualDismiss: true
  });

  sections: Array<any> = [];

  constructor(
    private _sectionService: SectionService,
    private _guiWizardService: GuiWizadService,
    private _resolver: ComponentFactoryResolver) {
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

  copyDesignHtml() {
    this.designHtml = '';

    this.sectionRenderers.forEach((sectionRenderer) => {
      this.designHtml += sectionRenderer.instance.section.html;
    });

    copy(this.designHtml, 'Design HTML copied to clipboard');
  }

  shiftIndex(from, to) {
    let splice = this.sectionRenderers.splice(from, 1)[0];
    this.sectionRenderers.splice(to, 0, splice);
  }

  onDragStart(event) {
    let sectionId: string = event.target.id.split('section_')[1];
    event.dataTransfer.setData('text/plain', sectionId);
  }

  onDragOver(event) {
    event.preventDefault();
  }

  onDrop(event) {
    if (this.isEditHtml) {
      return;
    }

    const id = event.dataTransfer.getData('text');

    this.hasSections = true;

    this._sectionService.getHtml(id).subscribe((html) => {
      const factory: ComponentFactory<SectionRendererComponent> = this._resolver.resolveComponentFactory(SectionRendererComponent);
      let componentRef: ComponentRef<SectionRendererComponent> = this.designItems.createComponent(factory);

      this.sectionRenderers.push(componentRef);

      let section = this.sections.find(x => x.id === id);

      section.html = html;
      componentRef.instance.section = section;

      componentRef.instance.onRibbonEnabled.subscribe((section: Section) => {
        this._guiWizardService.setEnabledSection(componentRef.instance.section.id);

        this.sectionRenderers.forEach((sectionRenderer) => {
          if (componentRef.hostView !== sectionRenderer.hostView) {
            sectionRenderer.instance.displaySectionRibbon = false;
          }
        });
      });

      componentRef.instance.onSectionRemoved.subscribe((section: Section) => {
        componentRef.destroy();
        this.toastManager.showSuccess(`${section.name} removed from template design successfully`);
      });

      componentRef.instance.onSectionTop.subscribe((section: Section) => {
        let index = this.designItems.indexOf(componentRef.hostView);

        if (index !== 0) {
          this.designItems.move(componentRef.hostView, 0);
          this.shiftIndex(index, 0)
        }
        else {
          this.toastManager.showWarning('Section is already at the top of the design');
        }
      });

      componentRef.instance.onSectionBottom.subscribe((section: Section) => {
        let index = this.designItems.indexOf(componentRef.hostView);

        if (index !== (this.designItems.length - 1)) {
          this.designItems.move(componentRef.hostView, this.designItems.length - 1);
          this.shiftIndex(index, this.designItems.length - 1);
        }
        else {
          this.toastManager.showWarning('Section is already at the top of the design');
        }
      });

      componentRef.instance.onSectionUp.subscribe((section: Section) => {
        let index = this.designItems.indexOf(componentRef.hostView);
        let newIndex = index - 1;

        if (newIndex >= 0) {
          this.designItems.move(componentRef.hostView, newIndex);
          this.shiftIndex(index, newIndex);
        }
        else {
          this.toastManager.showWarning('Section is already at the top of the design');
        }
      });

      componentRef.instance.onSectionDown.subscribe((section: Section) => {
        let index = this.designItems.indexOf(componentRef.hostView);
        let newIndex = index + 1;

        console.log(newIndex <= this.designItems.length);

        if (newIndex <= this.designItems.length - 1) {
          this.designItems.move(componentRef.hostView, newIndex);
          this.shiftIndex(index, newIndex);
        }
        else {
          this.toastManager.showWarning('Section is already at the bottom of the design');
        }
      });
    });

    event.dataTransfer.clearData();
  }
}
