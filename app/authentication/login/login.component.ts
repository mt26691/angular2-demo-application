import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {User} from '../shared/user'
import {AuthService} from '../shared/auth.service'
import {CookieService} from 'angular2-cookie/core';


@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    providers: [AuthService]
})
export class LoginComponent implements OnInit {

    user: User;
    constructor(private authService: AuthService, private router: Router, private cookieService: CookieService) { }

    ngOnInit() {
        this.user = new User("", "", "");
    }

    //login based on username and password
    login(user: User): void {
        this.authService.login(user).then(user => {
            this.user = user;
            //navigate to dashboard after login successfully
            this.cookieService.put("accessToken", user.accessToken);
            this.router.navigate([""]);
        });
    }

}