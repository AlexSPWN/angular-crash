import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from 'src/app/directives/hover.directive';
import { UnameValidatorDirective } from 'src/app/directives/uname-validator.directive';
import { MyvalidatorDirective } from 'src/app/directives/myvalidator.directive';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserListComponent,
    UserFormComponent,
    HoverDirective,
    UnameValidatorDirective,
    MyvalidatorDirective
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
