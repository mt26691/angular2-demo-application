// auth-guard.ts
import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

// import { AuthService } from './services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // if (this.authService.isLoggedIn()) {
        //   return true;
        // }

        // return true;
        this.router.navigate(['login']);
        return false;
    }
}