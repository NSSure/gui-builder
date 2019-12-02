import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import UserRegistration from 'src/app/models/UserRegistration';
import ToastManager from 'src/app/common/toast';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  toastManager: ToastManager = new ToastManager({
    enableManualDismiss: true
  });

  userCredentials: UserRegistration = new UserRegistration();

  constructor(private _userService: UserService, private _router: Router) {
    
  }

  login() {
    this._userService.login(this.userCredentials).subscribe(() => {
      this._router.navigateByUrl('/');
    }, (errorResponse) => {
      this.toastManager.showError(errorResponse.error);
    });
  }

  signup() {

  }
}
