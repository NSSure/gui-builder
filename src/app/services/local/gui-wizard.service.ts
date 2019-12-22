import { Injectable } from '@angular/core';

// Sample data import.
import { BehaviorSubject } from 'rxjs';
import { BaseService } from '../base.service';

@Injectable()
export class GuiWizadService extends BaseService {
  private _enabledSectionSource = new BehaviorSubject<number>(0);

  enableSectionObservable = this._enabledSectionSource.asObservable();

  setEnabledSection(sectionId: number) {
    this._enabledSectionSource.next(sectionId);
  }

  private _selectedElementSource = new BehaviorSubject<HTMLElement>(null);

  selectedElementObservable = this._selectedElementSource.asObservable();

  setSelectedElement(element: HTMLElement) {
    this._selectedElementSource.next(element);
  }
}