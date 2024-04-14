import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
//import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userId: number = 0;
  userData: User | undefined;
  //userId$!: Observable<number>;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {}
   
  /* userId$ = this.router.params.pipe(
      map(params => params['id'])
    ); */

  userId$ = this.route.paramMap.pipe(
    map(params => params.get('id'))
  );
 //read switchMap
  

  //userData$ = this.userService.getUserById(this.userId);

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.userService.getUserById(this.userId).subscribe(data => this.userData = data);
    //this.router.params.subscribe((params) => this.userId = params['id']);
    
  }

  onSave(userForm: NgForm) {
    //save item

    userForm.reset(); // clear
    //userForm.resetForm({name: "OOps"}); // clear and setup default values
    
    //navigate back
    this.router.navigate(['/users']);
  }

}
