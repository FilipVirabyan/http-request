import {Component, OnInit, Input} from '@angular/core';
import {UserModel} from "../../../core/models/user.model";

@Component({
    selector: 'app-all-info',
    templateUrl: './all-info.component.html',
    styleUrls: ['./all-info.component.css']
})
export class AllInfoComponent implements OnInit {
    @Input()
    public user:UserModel;

    constructor() {
    }

    ngOnInit(){
    }
}
