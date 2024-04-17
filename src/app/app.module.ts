import { APP_INITIALIZER, Component, NgModule } from '@angular/core';
import { BrowserModule, enableDebugTools } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
//import { UsersComponent } from './components/users/users.component';
//import { UserComponent } from './components/users/user/user.component';
//import { UserListComponent } from './components/users/user-list/user-list.component';
import { RequestInterceptor } from './services/request.interceptor';
import { InitService } from './services/init.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { UserFormComponent } from './components/users/user-form/user-form.component';
//import { HoverDirective } from './directives/hover.directive';
//import { UnameValidatorDirective } from './directives/uname-validator.directive';
//import { MyvalidatorDirective } from './directives/myvalidator.directive';

//import { UsersModule } from './components/users/users.module';

/* const appRoutes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users', component: UsersComponent }
] */

function initFactory(initService: InitService) {
  return () => initService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
/*     UsersComponent,
    UserComponent,
    UserListComponent,
    UserFormComponent, */
    /* HoverDirective,
    UnameValidatorDirective,
    MyvalidatorDirective */
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    //UsersModule,
    //RouterModule.forRoot(appRoutes, {enableTracing: false}),
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass:  RequestInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
