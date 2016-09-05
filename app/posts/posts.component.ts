import { Component, OnInit } from '@angular/core';

import {PostService} from './shared/post.service';

import {Post} from './shared/post';

@Component({
    selector: 'posts',
    templateUrl: 'app/posts/posts.component.html',
    providers: [PostService]
})
export class PostsComponent implements OnInit {
    constructor(private postService: PostService) {

    }

    posts: Post[];

    errorMessage: string;

    ngOnInit() {
        this.getPosts();
    }

    // get posts data from server
    getPosts(): void {
        this.postService.getPosts()
            .subscribe(
            posts => this.posts = posts,
            error => this.errorMessage = <any>error);
    };
}