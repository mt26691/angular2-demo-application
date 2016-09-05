import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions }    from '@angular/http';

import {AppConfig} from '../../shared/app.config'
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import {CookieService} from 'angular2-cookie/core';

import {User} from './user'

@Injectable()
export class AuthService {

    //inject http
    constructor(private http: Http, private cookieService: CookieService) {

    }

    //header
    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    //login by username and password
    login(user: User): Promise<User> {
        return this.http.post(AppConfig.LoginUrl, user, this.options)
            .toPromise()
            .then(res => res.json().data as User)
            .catch(this.handleError);
    }

    //check user is login
    isLoggedIn(): boolean {
        let accessToken = this.cookieService.get("accessToken");
        if(accessToken != null && accessToken != "")
        {
            return true;
        }
        return false;
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}