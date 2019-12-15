import { Component, OnInit } from '@angular/core';
import SectionToken from 'src/app/models/SectionToken';
import { SectionTokenService } from 'src/app/services/section-token.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'section-token-list',
  templateUrl: './section-token-list.component.html',
  styleUrls: ['./section-token-list.component.scss']
})
export class SectionTokenListComponent implements OnInit {
  sectionTokens: Array<SectionToken> = new Array();
  sectionId: string;

  constructor(private _sectionTokenService: SectionTokenService, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.parent.parent.params.subscribe((params) => {
      this.sectionId = params.sectionId;
    })
  }

  ngOnInit() {
    this._sectionTokenService.listTokensBySection(this.sectionId).subscribe((sectionTokens) => this.sectionTokens = sectionTokens);
  }
}
