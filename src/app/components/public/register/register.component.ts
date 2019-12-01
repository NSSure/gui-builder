import { Component } from '@angular/core';
import { Router } from '@angular/router';
import UserRegistration from 'src/app/models/UserRegistration';
import { UserService } from 'src/app/services/user.service';
import ToastManager from 'src/app/common/toast';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  toastManager: ToastManager = new ToastManager({
    enableManualDismiss: true
  });

  userRegistration: UserRegistration = new UserRegistration();

  constructor(private _userService: UserService, private _router: Router) {

  }

  login() {
    this._router.navigateByUrl('editor');
  }

  register() {
    this._userService.register(this.userRegistration).subscribe(() => {
      this._router.navigateByUrl('/');
    }, (errorResponse) => {
      this.toastManager.showError(errorResponse.error);
    });
  }
}
