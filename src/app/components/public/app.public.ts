import { Component } from '@angular/core';
import { fadeAnimation } from 'src/app/animations/animations';

@Component({
  selector: 'app-public',
  templateUrl: './app.public.html',
  styleUrls: ['./app.public.scss'],
  animations: [fadeAnimation]
})
export class AppPublic {

}
