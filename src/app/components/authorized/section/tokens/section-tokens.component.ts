import { Component, OnInit } from '@angular/core';
import SectionToken from 'src/app/models/SectionToken';

@Component({
  selector: 'section-tokens',
  templateUrl: './section-tokens.component.html',
  styleUrls: ['./section-tokens.component.scss']
})
export class SectionTokensComponent implements OnInit {
  sectionTokens: Array<SectionToken> = new Array();

  ngOnInit() {
    
  }
}
