import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { UserService } from '../services/user.service';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
    constructor(private _userService: UserService, private _router: Router) { }

    canActivate(): boolean {
        if (this._userService.isTokenExpired) {
            this._router.navigate(['login']);
            return false;
        }

        return true;
    }
}