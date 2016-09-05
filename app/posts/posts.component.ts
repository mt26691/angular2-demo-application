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

    deletePost(post: Post): void {
        //delete post and then update the current list
        this.postService.deletePost(post.id).then(() => {
            this.posts = this.posts.filter(t => t !== post);
        }
        );
    }
}