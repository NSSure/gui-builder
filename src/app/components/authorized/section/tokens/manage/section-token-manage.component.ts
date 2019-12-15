import { Component } from '@angular/core';
import SectionToken from 'src/app/models/SectionToken';
import ToastManager from 'src/app/common/toast';
import { SectionTokenService } from 'src/app/services/section-token.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'section-token-manage',
  templateUrl: './section-token-manage.component.html',
  styleUrls: ['./section-token-manage.component.scss']
})
export class SectionTokenManageComponent {
  toastManager: ToastManager = new ToastManager({ enableManualDismiss: true });
  sectionToken: SectionToken = new SectionToken();
  valueRestriction: string = '';

  constructor(private _sectionTokenService: SectionTokenService, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.parent.parent.params.subscribe((params) => {
      this.sectionToken.sectionId = params.sectionId;
    })
  }

  save() {
    this.sectionToken.values = this.sectionToken.values || new Array();
    this.sectionToken.valuesJson = JSON.stringify(this.sectionToken.values);

    if (this.sectionToken.id) {
      this.processExistingSectionToken();
    }
    else {
      this.processNewSectionToken();
    }
  }

  processNewSectionToken() {
    this._sectionTokenService.processNewSectionToken(this.sectionToken).subscribe(() => {
      this.toastManager.showSuccess('Section token added successfully');
    }, (errorResponse: HttpErrorResponse) => {
      this.toastManager.showError(errorResponse.error);
    });
  }

  processExistingSectionToken() {
    this._sectionTokenService.processExistingSectionToken(this.sectionToken).subscribe(() => {
      this.toastManager.showSuccess('Section token updated successfully');
    }, (errorResponse: HttpErrorResponse) => {
      this.toastManager.showError(errorResponse.error);
    });
  }

  pushValueRestriction() {
    if (this.valueRestriction === '') {
      this.toastManager.showWarning('Please enter a value before continuing');
    }
    else{
      this.sectionToken.values = this.sectionToken.values || new Array();
      this.sectionToken.values.push(this.valueRestriction);
      this.valueRestriction = '';
    }
  }
}
