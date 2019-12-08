import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized, NavigationEnd, ActivatedRoute, ResolveStart } from '@angular/router';

import { filter, map, mergeMap } from "rxjs/operators";
import { pipe } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-authorized',
  templateUrl: './app.authorized.html',
  styleUrls: ['./app.authorized.scss']
})
export class AppAuthorized implements OnInit {
  routerSub: any;
  data: any = {};
  email: string;

  constructor(private router: Router, private _userService: UserService) { 
    this._userService.isAuthenticated.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.email = this._userService.userToken.email;
      }
    });
  }

  ngOnInit() {
    this.findStateData(this.router.routerState.snapshot.root.firstChild);
    
    this.routerSub = this.router.events.subscribe((evt) => {
      if (evt instanceof RoutesRecognized) {
        console.log(evt);
        // some Angular clumsiness
        this.data = {};
        this.findStateData(evt.state.root.firstChild);
      }

      if (!(evt instanceof NavigationEnd)) {
          return;
      }  
    });
  }

  findStateData(firstChild: any){
    if(!firstChild){
      return;
    }

    if(firstChild.data){
      for(let key in firstChild.data){
        if (firstChild.data.hasOwnProperty(key)) {
          this.data[key] = firstChild.data[key];
        }
      }
    }

    this.findStateData(firstChild.firstChild);
  }

  ngOnDestroy(): void {
      this.routerSub.unsubscribe();
  }
}
