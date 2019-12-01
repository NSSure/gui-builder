import { Component } from '@angular/core';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'my-sections',
  templateUrl: './my-sections.component.html',
  styleUrls: ['./my-sections.component.scss']
})
export class MySectionsComponent {
  mySections: Array<any> = [];

  constructor(private _sectionService: SectionService) {
    this._sectionService.listMySections().subscribe((mySections) => this.mySections = mySections);
  }
}
