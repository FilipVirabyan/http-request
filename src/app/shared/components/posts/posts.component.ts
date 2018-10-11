import { Component, OnInit,Input } from '@angular/core';
import {PostModel} from "../../../core/models/post.model";
import {CommentModel} from "../../../core/models/comment.model";
import {CommentService} from "../../../core/services/comment.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
@Input()
public post:PostModel;
public isActive:boolean = false;
public comments:Array<CommentModel> = [];

    constructor(private commentService:CommentService) { }

    public active(postId): void {
        this.isActive = !this.isActive;

        this.commentService.getComments(postId.toString())
            .subscribe((data) => {
                this.comments = data;
            }, (err) => {
                console.log(err);
            }, () => {
            });
    }

  ngOnInit() {
  }

}
