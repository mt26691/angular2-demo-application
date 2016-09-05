/*when we need some thing, we import it*/
import { Component } from '@angular/core';

import {  AuthHttp } from 'angular2-jwt';
//meta data tells angular how to create this Component
@Component({
    selector: 'app-root',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent {
    title = "this is the app title";

    constructor(private authHttp: AuthHttp) {

    }
}