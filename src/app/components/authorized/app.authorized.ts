import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-authorized',
  templateUrl: './app.authorized.html',
  styleUrls: ['./app.authorized.scss']
})
export class AppAuthorized implements OnInit {
  title: string;

  constructor(public router: Router) {

  }

  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.title = data.state.root.firstChild.data.title;
        console.log(this.title);
      }
    });
  }
}
