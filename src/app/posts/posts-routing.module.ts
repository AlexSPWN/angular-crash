import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
//import { postsGuard } from './guard/posts.guard';
import { postsResolver } from './resolver/posts.resolver';

const routes: Routes = [{ path: '', component: PostsComponent, resolve: {posts: postsResolver} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
