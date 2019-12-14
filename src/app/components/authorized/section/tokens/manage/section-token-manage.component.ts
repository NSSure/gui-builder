import { Component } from '@angular/core';
import SectionToken from 'src/app/models/SectionToken';
import ToastManager from 'src/app/common/toast';

@Component({
  selector: 'section-token-manage',
  templateUrl: './section-token-manage.component.html',
  styleUrls: ['./section-token-manage.component.scss']
})
export class SectionTokenManageComponent {
  toastManager: ToastManager = new ToastManager({
    enableManualDismiss: true
  });

  sectionToken: SectionToken = new SectionToken();
  valueRestriction: string = '';

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
