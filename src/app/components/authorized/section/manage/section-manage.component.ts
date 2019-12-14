import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import Section from 'src/app/models/Section';
import { SectionService } from 'src/app/services/section.service';
import ToastManager from 'src/app/common/toast';
import ProcessSectionResponse from 'src/app/models/responses/ProcessSectionResponse';
import { EditorService } from 'src/app/services/editor.service';
import { delay } from 'q';

@Component({
  selector: 'section-manage',
  templateUrl: './section-manage.component.html',
  styleUrls: ['./section-manage.component.scss'],
  providers: [
    EditorService
  ]
})
export class SectionManageComponent implements OnInit {
  toastManager: ToastManager = new ToastManager({
    interval: 2000,
    enableManualDismiss: true
  });

  options: any = { maxLines: Infinity, printMargin: false };
  section: Section = new Section();
  sectionResponse: ProcessSectionResponse = new ProcessSectionResponse();

  constructor(private _activatedRoute: ActivatedRoute, private _editorService: EditorService, private _sectionService: SectionService) {

  }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params) => {
      if (params.sectionId) {
        this._sectionService.get(params.sectionId).subscribe((section) => this.section = section);
      }
    })
  }

  addNewSection() {
    this.section.html = this._editorService.getCurrentSectionHtml();
    this.section.tagsJson = JSON.stringify(this.section.tags);

    if (this.section.id) {
      this._sectionService.processExistingSection(this.section).subscribe(() => {
        this.toastManager.showSuccess('Section updated successfully.');
      }, (error) => {
        this.toastManager.showError('Failed to update section. Please try again.');
      });
    }
    else {
      this._sectionService.processNewSection(this.section).subscribe((response: ProcessSectionResponse) => {
        this.sectionResponse = response;

        if (this.sectionResponse.tokenIntegrityResponse.isMalformed) {
          this.toastManager.showWarning('Section has malformed tokens.');
        }
        else {
          this.toastManager.showSuccess('Section added successfully.');
        }
      }, (error) => {
        this.toastManager.showError('Failed to update section. Please try again.');
      });
    }
  }
}
