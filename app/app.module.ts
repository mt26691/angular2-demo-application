import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AUTH_PROVIDERS } from 'angular2-jwt';

//custom component
import { AppComponent } from './app.component';
import {PostsComponent} from './posts/posts.component'
import {PostDetailComponent} from './posts/post-detail/post-detail.component'
import {LoginComponent} from './authentication/login/login.component'

//rxjs 
import './rxjs-extensions';
//routing
import {routing} from './app.routing';
//authentication
import {AuthGuard} from'./authentication/auth-guard';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing,

    ],
    declarations: [AppComponent, PostsComponent, PostDetailComponent, LoginComponent],
    providers: [AUTH_PROVIDERS, AuthGuard],
    bootstrap: [AppComponent],
})
export class AppModule { }
