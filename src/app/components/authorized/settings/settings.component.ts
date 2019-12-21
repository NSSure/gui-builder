import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  email: string;
  expirationDate: Date;
  doesTokenExpire: boolean = false;

  constructor(private _userService: UserService) {

  }

  ngOnInit() {
    this._userService.isAuthenticated.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.email = this._userService.userToken.email;
        this.expirationDate = this._userService.userToken.expirationDate;
        
        if (this.expirationDate.toString() !== "0001-01-01T00:00:00") {
          this.doesTokenExpire = true;
        }
      }
    });
  }
}
