import { Component, OnInit } from '@angular/core';

import {PostService} from './';

@Component({
    selector: 'posts',
    templateUrl: 'app/posts/posts.component.html',
    providers: [PostService]
})
export class PostsComponent implements OnInit {
    constructor() { }

    ngOnInit() {
       
    }
}