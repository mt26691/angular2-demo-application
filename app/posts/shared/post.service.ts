import { Injectable } from '@angular/core';

import {Post} from './post'
import {AppConfig} from '../../shared/app.config'
import { Headers, Http, Response, RequestOptions }    from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostService {

    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) {

    }

    //get post based on id
    getPost(id: string): Observable<Post> {
        const url = `${AppConfig.PostUrl}/${id}`;

        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getPostPromise(id: string): Promise<Post> {
        const url = `${AppConfig.PostUrl}/${id}`;
        return this.http.get(url).toPromise()
            .then(response => response.json().data as Post)
            .catch(this.handleError);
    }

    //get many posts
    getPosts(): Observable<Post[]> {
        return this.http.get(AppConfig.PostUrl)
            .map(this.extractData)
            .catch(this.handleError);;
    }

    //create or update post
    savePost(post: Post): Promise<Post> {
        return this.http.post(AppConfig.PostUrl, post, this.options)
            .toPromise()
            .then(res => res.json().data as Post)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
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