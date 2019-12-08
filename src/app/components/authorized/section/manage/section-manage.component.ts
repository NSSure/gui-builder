import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import Section from 'src/app/models/Section';
import { SectionService } from 'src/app/services/section.service';
import ToastManager from 'src/app/common/toast';

@Component({
  selector: 'section-manage',
  templateUrl: './section-manage.component.html',
  styleUrls: ['./section-manage.component.scss']
})
export class SectionManageComponent implements OnInit {
  toastManager: ToastManager = new ToastManager({
    interval: 2000,
    enableManualDismiss: true
  });

  options: any = { maxLines: Infinity, printMargin: false };
  section: Section = new Section();

  constructor(private _activatedRoute: ActivatedRoute, private _sectionService: SectionService) {

  }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params) => {
      if (params.sectionId) {
        this._sectionService.get(params.sectionId).subscribe((section) => this.section = section);
      }
    })
  }

  onContentChanged(html: string) {
    this.section.html = html;
  }

  addNewSection() {
    this.section.tagsJson = JSON.stringify(this.section.tags);

    if (this.section.id) {
      this._sectionService.processExistingSection(this.section).subscribe(() => {
        this.toastManager.showSuccess('Section updated successfully.');
      }, (error) => {
        this.toastManager.showError('Failed to update section. Please try again.');
      });
    }
    else {
      this._sectionService.processNewSection(this.section).subscribe(() => {
        this.toastManager.showSuccess('Section added successfully.');
      }, (error) => {
        this.toastManager.showError('Failed to update section. Please try again.');
      });
    }
  }
}
