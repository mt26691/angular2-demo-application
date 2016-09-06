import { AuthService } from './../shared/auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {User} from '../shared/user'

import {CookieService} from 'angular2-cookie/core';


@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    providers: [AuthService],

})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    username: FormControl;

    password: FormControl;

    submitAttempt: boolean = false;

    user: User;

    ngOnInit() {
        this.username = new FormControl('', Validators.required);
        this.password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)]));

        this.loginForm = this.formBuilder.group({
            username: this.username,
            password: this.password
        });
    }

    //constructor
    constructor(private authService: AuthService,
        private router: Router,
        private cookieService: CookieService,
        private formBuilder: FormBuilder) {
    }

    //submit username and password to server
    onSubmit(formValue: FormGroup): void {
        this.submitAttempt = true;
        //if form is valid, submit value to server
        if (formValue.valid) {
            this.user = formValue.value;
            this.authService.login(this.user).then(user => {
                this.user = user;
                //navigate to dashboard after login successfully
                this.cookieService.put("accessToken", user.accessToken);
                this.router.navigate([""]);
            });
        }
    }

}