import { Component, OnInit } from '@angular/core';
import SectionToken from 'src/app/models/SectionToken';

@Component({
  selector: 'section-token-list',
  templateUrl: './section-token-list.component.html',
  styleUrls: ['./section-token-list.component.scss']
})
export class SectionTokenListComponent implements OnInit {
  sectionTokens: Array<SectionToken> = new Array();

  ngOnInit() {
    
  }
}
