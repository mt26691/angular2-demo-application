import { Injectable } from '@angular/core';

import {Post} from './post'
@Injectable()
export class PostService {

    constructor() { }

    //get post based on id
    getPost(id:string) : Promise<Post>{
        return null;
    }

    //get many posts
    getPosts(): Promise<Post[]>{
        return null;
    }

    //create or update post
    savePost(post:Post): Promise<Post>{
        return null;
    }
    
}