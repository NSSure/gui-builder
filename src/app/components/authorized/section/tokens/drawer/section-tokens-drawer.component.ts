import { Component } from '@angular/core';
import { SectionTokenService } from 'src/app/services/section-token.service';

@Component({
  selector: 'section-tokens-drawer',
  templateUrl: './section-tokens-drawer.component.html',
  styleUrls: ['./section-tokens-drawer.component.scss'],
  providers: [SectionTokenService]
})
export class SectionTokensDrawerComponent {

}
