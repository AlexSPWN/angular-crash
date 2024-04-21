import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from './post';
import { Observable, catchError, map, of, pluck } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postList: Post[] = [];

  constructor(private postService: PostsService, private route: ActivatedRoute) {}

ngOnInit(): void {
  //this.route.data.subscribe(data => console.log(data['posts']));
}

  posts$: Observable<Post[]> = this.route.data.pipe(
    
    map(data => data['posts']),
    
    catchError(err => {
      return of([]);
    })
  );

 /*  posts$ = this.postService.getPosts$.pipe(
    catchError((err) => { 
        //this.error$.next(err.message);
        return of([]);
      }
    )); */

}
