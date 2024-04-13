import { HttpEventType } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, catchError, of, shareReplay, map, concat} from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  userList: User[] = [];
  

  constructor(private userService: UserService) {}
  totalBytes = 0;

  subscription!: Subscription;
  error$: Subject<string> = new Subject<string>();
  getError$ = this.error$.asObservable();

  userList$ = this.userService.getUsers$.pipe(
    catchError((err) => { 
        this.error$.next(err.message);
        return of([]);
      }
    )
  );

  userListCount$ = this.userService.getUsers$.pipe(
    map((data) => data.length)
  );

  fff$ = this.userService.getTest$;

  ngOnInit(): void {
    /* this.userService
      .getUsers()
      .subscribe((userList) => (this.userList = userList)); */

    this.subscription = this.userService.getUsers$.subscribe((userList) => (this.userList = userList));

    /* this.userService.getUsers().pipe(
      shareReplay(1)
    ) */
    /* this.userService.getRequestUsers().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been sent');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request success');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
          break;
        }
        default: {
          console.log('Default');
          break;
        }
      }
    }
  ); */
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
      console.log("Unsubscribe!");
    }
  }
}
