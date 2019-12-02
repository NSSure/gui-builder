import { Injectable } from '@angular/core';

// Sample data import.
import { BaseService } from './base.service';
import Section from '../models/Section';
import { Observable } from 'rxjs';

@Injectable()
export class SectionService extends BaseService {
  get apiUrl() {
    return `${this.baseUrl}section/`
  }

  private _mySections: Array<Section>;

  get MySections(): Array<Section> {
    if (this._mySections == null) {
      this._mySections = JSON.parse(localStorage.getItem('MySections'));

      if (this._mySections == null) {
        this._mySections = [];
      }
    }

    return this._mySections;
  }

  processNewSection(section: Section) {
    return this.http.post<boolean>(this.apiUrl + 'add', section, this.httpOptions);
  }

  processExistingSection(section: Section) {
    return this.http.post<boolean>(this.apiUrl + 'update', section, this.httpOptions);
  }

  getHtml(sectionId: string) {
    return this.http.post<string>(this.apiUrl + 'get/html', { value: sectionId }, this.httpOptions);
  }

  listSections() {
    return this.http.get<Array<Section>>(this.apiUrl + 'list', this.httpOptions);
  }
}