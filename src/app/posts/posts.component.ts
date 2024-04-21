import { Component } from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from './post';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  postList: Post[] = [];

  constructor(private postService: PostsService) {}

  posts$ = this.postService.getPosts$.pipe(
    catchError((err) => { 
        //this.error$.next(err.message);
        return of([]);
      }
    ));

}
