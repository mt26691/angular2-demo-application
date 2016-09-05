import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router'

//custom
import {Post} from '../shared/post'
import {PostService} from'../shared/post.service'

@Component({
    moduleId: module.id,
    selector: 'post-detail',
    templateUrl: './post-detail.component.html',
    providers: [PostService]
})
export class PostDetailComponent implements OnInit {
    post: Post;

    constructor(private postService: PostService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            //because params['id'] is string we use + to covert it to number
            let id = params['id'];

            //get Observable<Post>
            //this.postService.getPost(id).subscribe(post => this.post = post);

            //get Promise<Post>
            this.postService.getPostPromise(id).then(post => this.post = post);

        });
    }

    goBack(): void {
        window.history.back();
    }

    save(): void {
        this.postService.savePost(this.post).then(t => this.post = t);
    }

}