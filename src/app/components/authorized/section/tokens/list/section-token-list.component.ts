import { Component, OnInit } from '@angular/core';
import SectionToken from 'src/app/models/SectionToken';
import { SectionTokenService } from 'src/app/services/section-token.service';
import { ActivatedRoute } from '@angular/router';
import { trigger, transition, animate, style, query, group } from '@angular/animations';

@Component({
  selector: 'section-token-list',
  templateUrl: './section-token-list.component.html',
  styleUrls: ['./section-token-list.component.scss'],
  animations: [
    trigger('routeSlide', [
      transition('* <=> *', [
        group([
          query(':enter', [
            style({ transform: 'translateX(100%)'}),
            animate('0.4s ease-in-out', style({ transform: 'translateX(0%)'}))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0%)'}),
            animate('0.4s ease-in-out', style({ transform: 'translateX(-100%)'}))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class SectionTokenListComponent implements OnInit {
  sectionTokens: Array<SectionToken> = new Array();
  sectionId: string;

  constructor(private _sectionTokenService: SectionTokenService, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.parent.parent.params.subscribe((params) => {
      this.sectionId = params.sectionId;
    });
  }

  ngOnInit() {
    this._sectionTokenService.listTokensBySection(this.sectionId).subscribe((sectionTokens) => this.sectionTokens = sectionTokens);
  }
}
