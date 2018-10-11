import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import {UserModel} from '../../../core/models/user.model';
import {UserService} from "../../../core/services/user.service";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    @Input()
    public user: UserModel;
    public isActive: boolean = false;

    constructor(private userService: UserService) {
    }

    public active(userId): void {
        this.isActive = !this.isActive;

        this.userService.getOneUser(userId.toString())
            .subscribe((data) => {
                this.user = data;
            }, (err) => {
                console.log(err);

            }, () => {
            });
    }

    ngOnInit() {

    }
}
