import { Component } from '@angular/core';
import { routeAnimations } from 'src/app/animations/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './app.public.html',
  styleUrls: ['./app.public.scss'],
  animations: [routeAnimations]
})
export class AppPublic {

}
