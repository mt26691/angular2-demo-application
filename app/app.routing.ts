import { ModuleWithProviders } from '@angular/core'
import {Routes, RouterModule  }  from '@angular/router'

import {PostsComponent} from './posts/posts.component'
import {PostDetailComponent} from './posts/post-detail/post-detail.component'
import {AuthGuard} from './authentication/auth-guard';
import {LoginComponent} from './authentication/login/login.component'

const appRoutes: Routes = [
    {
        path: '',
        component: PostsComponent
    },
    {
        path: 'post/edit/:id',
        component: PostDetailComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);