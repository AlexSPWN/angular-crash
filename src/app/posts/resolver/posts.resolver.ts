import { ResolveFn } from '@angular/router';
import { PostsService } from '../posts.service';
import { inject } from '@angular/core';
import { Post } from '../post';

export const postsResolver: ResolveFn<Post[]> = (route, state) => {
  return inject(PostsService).getPosts$;
};
