import { Injectable } from '@angular/core';

// Sample data import.
import { BaseService } from './base.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class EditorService extends BaseService {
  private _currentSectionHtmlSource = new BehaviorSubject<string>('');

  currentSectionHtml = this._currentSectionHtmlSource.asObservable();

  setCurrentSectionHtml(sectionHtml) {
    this._currentSectionHtmlSource.next(sectionHtml);
  }

  getCurrentSectionHtml() {
      return this._currentSectionHtmlSource.value;
  }
}