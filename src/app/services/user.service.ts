import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, shareReplay } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  getUsers$ = this.httpClient.get<User[]>(this.apiUrl).pipe(
    //map((data: User[]) => data.map((d) => d.name = `! ${d.name}`)),
    shareReplay(1)
  );

  getRequestUsers() {
    const request = new HttpRequest('GET', this.apiUrl, { reportProgress: true });
    return this.httpClient.request(request);
  }

  //modify existing data
  getTest$ = this.httpClient.get<User[]>(this.apiUrl).pipe(
    map((data: User[]) => data.map((d) => ( {...d, name: `👤 ${d.name}: 📬 ${d.email}`}) )
  ));
}