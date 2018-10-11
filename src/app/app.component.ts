import {Component, OnInit} from '@angular/core';
import {UserModel} from './core/models/user.model';
import { PostModel } from "./core/models/post.model";
import {UserService} from './core/services/user.service';
import {PostService} from "./core/services/post.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    public users: Array<UserModel> = [];
    public posts: Array<PostModel> = [];

    constructor(private userService: UserService, private postService: PostService) {
    }

    ngOnInit(): void {
        this.userService.getUsers()
            .subscribe((data) => {
                this.users = data;
            }, (err) => {
                console.log(err);
            }, () => {
            });

        this.postService.getPosts()
            .subscribe((data) => {
                this.posts = data;
            }, (err) => {
                console.log(err);
            }, () => {
            });
    }


}