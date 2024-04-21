import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HoverDirective } from 'src/app/directives/hover.directive';
import { UnameValidatorDirective } from 'src/app/directives/uname-validator.directive';
import { MyvalidatorDirective } from 'src/app/directives/myvalidator.directive';
import { UserRformComponent } from './user-rform/user-rform.component';
import { SharedModule } from 'src/app/shared/shared.module';
//import { AppModule } from "../../app.module";



@NgModule({
    declarations: [
        UsersComponent,
        UserComponent,
        UserListComponent,
        UserFormComponent,
        HoverDirective,
        UnameValidatorDirective,
        MyvalidatorDirective,
        UserRformComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        FormsModule, ReactiveFormsModule, SharedModule
        //AppModule
    ]
})
export class UsersModule { }
