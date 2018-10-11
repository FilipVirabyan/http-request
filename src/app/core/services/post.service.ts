import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { PostModel } from "../models/post.model";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  public getPosts(): Observable<Array<PostModel>> {
    return this.http.get<Array<PostModel>>('https://jsonplaceholder.typicode.com/posts');
  }
}
