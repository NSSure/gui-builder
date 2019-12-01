import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthenticatedGuard implements CanActivate {
    constructor(private _router: Router) { }

    canActivate(): boolean {
        let isTokenExpired: boolean = false;

        if (isTokenExpired) {
            this._router.navigate(['login']);
            return false;
        }

        return true;
    }
}