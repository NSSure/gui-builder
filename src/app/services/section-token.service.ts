import { Injectable } from '@angular/core';

// Sample data import.
import { BaseService } from './base.service';
import { map } from "rxjs/operators";
import SectionToken from '../models/SectionToken';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SectionTokenService extends BaseService {
  get apiUrl() {
    return `${this.baseUrl}section/token/`
  }

  processNewSectionToken(sectionToken: SectionToken) {
    return this.http.post<boolean>(this.apiUrl + 'add', sectionToken, this.httpOptions).pipe(map(sectionTokens => {

    }));
  }

  processExistingSectionToken(sectionToken: SectionToken) {
    return this.http.post<boolean>(this.apiUrl + 'update', sectionToken, this.httpOptions);
  }

  listTokensBySection(sectionId: string) {
    return this.http.post<Array<SectionToken>>(this.apiUrl + 'list', { value: sectionId }, this.httpOptions);
  }
}