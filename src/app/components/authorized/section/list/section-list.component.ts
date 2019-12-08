import { Component } from '@angular/core';
import { SectionService } from 'src/app/services/section.service';
import Section from 'src/app/models/Section';

@Component({
  selector: 'section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss']
})
export class SectionListComponent {
  sections: Array<Section> = [];

  constructor(private _sectionService: SectionService) {
    this._sectionService.listSections().subscribe((sections) => this.sections = sections);
  }
}
