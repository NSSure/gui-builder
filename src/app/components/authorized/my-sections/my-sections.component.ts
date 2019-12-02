import { Component } from '@angular/core';
import { SectionService } from 'src/app/services/section.service';
import Section from 'src/app/models/Section';

@Component({
  selector: 'my-sections',
  templateUrl: './my-sections.component.html',
  styleUrls: ['./my-sections.component.scss']
})
export class MySectionsComponent {
  sections: Array<Section> = [];

  constructor(private _sectionService: SectionService) {
    this._sectionService.listSections().subscribe((sections) => this.sections = sections);
  }
}
