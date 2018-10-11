import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../core/services/user.service';
import { PostsComponent } from './components/posts/posts.component';
import { SelectUserDirective } from './directives/select-user.directive';
import { AllInfoComponent } from './components/all-info/all-info.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UserListComponent } from "./components/user-list/user-list.component";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [UserListComponent, SelectUserDirective, AllInfoComponent, PostsComponent, CommentsComponent],
    providers: [UserService],
    exports: [UserListComponent,SelectUserDirective,PostsComponent,CommentsComponent]
})
export class SharedModule {
}
