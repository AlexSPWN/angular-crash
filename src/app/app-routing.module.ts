import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { AboutComponent } from './components/about/about.component';
import { UsersComponent } from './components/users/users.component';
import { AppComponent } from './app.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { loginGuard } from './guards/login.guard';

const appRoutes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent },
  /* { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserFormComponent }, */
  { path: 'users', 
      //canActivate: [loginGuard], 
      loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule),},
  { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
  { path: '**', redirectTo: '' }
]

//creating lazy loaded module
// ng g m assets --route=assets --rounting --module=app


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
