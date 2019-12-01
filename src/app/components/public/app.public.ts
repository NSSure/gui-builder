import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from 'src/app/animations/animations';

@Component({
  selector: 'app-public',
  templateUrl: './app.public.html',
  styleUrls: ['./app.public.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppPublic {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
