import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { CommentModel } from "../models/comment.model";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

    public getComments(postId): Observable<Array<CommentModel>> {
        return this.http.get<Array<CommentModel>>('https://jsonplaceholder.typicode.com/posts/'+ postId +'/comments');
    }
}
