import { Injectable } from '@angular/core';

// Sample data import.
import { BaseService } from './base.service';
import Section from '../models/Section';
import { of } from 'rxjs';

@Injectable()
export class SectionService extends BaseService {
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

  addNewSection(section: Section) {
      section.id = Math.round(Math.random() * 10);
      this.MySections.push(section);
      localStorage.setItem("MySections", JSON.stringify(this.MySections));
  }

  getSectionById(id: number) {
    let section: Section = this.MySections.find(x => x.id == id);
    return of(section);
  }

  listMySections() {
      return of(this.MySections);
  }
}