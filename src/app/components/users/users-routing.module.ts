import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserRformComponent } from './user-rform/user-rform.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  //{ path: ':id', component: UserFormComponent },
  { path: ':id', component: UserRformComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
