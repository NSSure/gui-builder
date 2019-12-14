import { Injectable } from '@angular/core';

// Sample data import.
import { BaseService } from './base.service';
import Section from '../models/Section';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import ProcessSectionResponse from '../models/responses/ProcessSectionResponse';

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
    return this.http.post<ProcessSectionResponse>(this.apiUrl + 'add', section, this.httpOptions);
  }

  processExistingSection(section: Section) {
    return this.http.post<boolean>(this.apiUrl + 'update', section, this.httpOptions);
  }

  get(sectionId: string) {
    return this.http.post<Section>(this.apiUrl + 'get', { value: sectionId }, this.httpOptions);
  }

  getHtml(sectionId: string) {
    const options = { headers: this.httpOptions.headers, responseType: 'text' as 'text' };
    return this.http.post(this.apiUrl + 'get/html', { value: sectionId }, options);
  }

  listSections() {
    return this.http.get<Array<Section>>(this.apiUrl + 'list', this.httpOptions);
  }
}