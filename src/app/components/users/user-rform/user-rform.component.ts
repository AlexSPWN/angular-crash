import { Component, OnInit } from '@angular/core';
import { FormArrayName, FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { UnameValidatorDirective } from 'src/app/directives/uname-validator.directive';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { CustomValidators } from 'src/app/shared/custom-validators';


@Component({
  selector: 'app-user-rform',
  templateUrl: './user-rform.component.html',
  styleUrls: ['./user-rform.component.css']
})
export class UserRformComponent implements OnInit {

  userRForm!: FormGroup;
  userId: number = 0;
  userData: User | undefined;
  formSaved: boolean = false;
  //userR: UserR = new UserR();

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router:Router, private userService: UserService) {}
  //constructor(private fb: FormBuilder, private unameValidator: UnameValidatorDirective) {}

  companies() {
    return this.userRForm.get('companies') as FormArray;
  }

  hasChanges() {
    if(this.formSaved) {
      return false;
    }
    return this.userRForm.dirty;
  }

  ngOnInit(): void {

    this.userId = this.route.snapshot.params['id'];    

    this.userRForm = this.fb.group(
      {
        id: new FormControl( {value: '', disabled: true}), // <-- disable value
        name: new FormControl('', Validators.required),
        //username: new FormControl('', {updateOn: 'blur', validators:[Validators.required, CustomValidators.checkUserName]}),
        username: new FormControl('', {updateOn: 'blur', validators:[Validators.required, CustomValidators.checkUname('@')]}),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl('', [Validators.required, Validators.pattern(/[\-\+\s0-9]+/)]),
        address: this.fb.group({ // <-- NESTED FORM
          city: new FormControl('', [Validators.required]),
          street: new FormControl(''),
          suite: new FormControl('')
        }),
        companies: this.fb.array([ // <-- DYNAMIC FORM
          /* this.fb.group({
            name: new FormControl(''),
            country: new FormControl(''),
            city: new FormControl(''),
            duration: new FormControl('')
          }) */
          this.addCompanyControl()
        ])
      } //, {updateOn: 'blur', validators: [ CustomValidators.checkTwoFields]}
    );

    this.userService.getUserById(this.userId).subscribe(data => {
      this.userData = data;
      this.userRForm.patchValue({
        id: data.id,
        name: data.name,
        username: data.username,
        email: data.email,
        phone: data.phone
      });
      this.userRForm.controls['address'].patchValue({ 
        city: data.address.city,
        street: data.address.street,
        suite: data.address.suite
      });
    });

    /* this.userRForm.setValue({
      id: this.userData?.id,
      name: this.userData?.name,
      username: this.userData?.username,
      email: this.userData?.email,
      phone: this.userData?.phone
    }); */
  }

  addCompany() {
    this.companies().push(this.addCompanyControl());
    console.log('add company');
  }

  addCompanyControl() {
    return this.fb.group({
      name: new FormControl('', [Validators.required]),
      country: new FormControl(''),
      city: new FormControl(''),
      duration: new FormControl('')
    });
  }

  removeCompany(i: number) {
    this.companies().removeAt(i);
  }

  addControl() {
    this.userRForm.addControl('role', new FormControl('', [Validators.required]));
    
    //throw new Error('Method not implemented.');
  }

  checkIfRequired(control: string) {
    return this.userRForm.get(control)?.hasValidator(Validators.required);
  }

  removeControl() {
    this.userRForm.removeControl('role');
  }

  saveForm() {
    console.log(this.userRForm.value);
    console.log(this.userRForm.getRawValue()); // with disabled values
    this.formSaved = true;
    //navigate back
    this.router.navigate(['/users']);
  }

  resetForm() {
    this.userRForm.reset({name: 'ggg'});
  }
}

/* export class UserR {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;

  constructor(id: number, name: string, username: string, email: string, phone: string) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.phone = phone;
  }
} */
