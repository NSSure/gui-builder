import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import Section from 'src/app/models/Section';
import { SectionService } from 'src/app/services/section.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'section-manage',
  templateUrl: './section-manage.component.html',
  styleUrls: ['./section-manage.component.scss']
})
export class SectionManageComponent implements OnInit {
  text: string = "";
  options: any = { maxLines: Infinity, printMargin: false };
  loaded: boolean = false;

  calculatedHeight: number = 0;

  section: Section = new Section();

  tags: Array<any> = new Array();

  constructor(private _activatedRoute: ActivatedRoute, private _sectionService: SectionService) {

  }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params) => {
      if (params.sectionId) {
        this._sectionService.get(params.sectionId).subscribe((section) => {
          this.tags = section.tags.map((tag) => {
            return {
              display: tag,
              value: tag,
              readonly: false
            }
          });

          this.section = section;
        });
      }
    })
  }

  onContentChanged(html: string) {
    this.section.html = html;
  }

  addNewSection() {
    this.section.tags = [];

    this.section.tags = this.tags.map((tag) => {
      return tag.value;
    });
    
    if (this.section.id) {
      this._sectionService.processExistingSection(this.section).subscribe();
    }
    else {
      this._sectionService.processNewSection(this.section).subscribe();
    }
  }
}
