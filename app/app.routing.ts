import { ModuleWithProviders } from '@angular/core'
import {Routes, RouterModule  }  from '@angular/router'

import {PostsComponent} from './posts/posts.component'
const appRoutes: Routes = [
    {
        path: '',
        component: PostsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);