import { CanActivateFn, ResolveFn } from '@angular/router';
import { Post } from '../post';
import { inject } from '@angular/core';
import { PostsService } from '../posts.service';

export const postsGuard: ResolveFn<Post[]> = (route, state) => {
  return inject(PostsService).getPosts$;
};
