import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

export class CustomValidators {
  static checkUserName(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;

    if (value && !value.includes('.')) {
      console.log(`check User Name: ${value} - Wrong`);
      return { unameInValid: true };
    } else {
      console.log(`check User Name: ${value} - Correct`);
      return null;
    }

    //return !control.value.includes('.') ? { 'unameInValid': true} : null;
  }

  // custom validator with params
  static checkUname(char: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (value && value.includes(char)) {
        console.log(`check User Name: char ${char} is not allowed for ${value} - Wrong`);
        return { unameInValid: true };
      } else {
        console.log(`check User Name: ${value} - Correct`);
        return null;
      }
    };
  }

  static checkTwoFields(control: FormGroup): ValidationErrors | null {
    const name: string =control.get('name')?.value;
    const username: string = control.get('username')?.value;
    
    //pass an error to another field
    control.get('username')?.setErrors({
      isDifferent: true
    });
    
    if(name !== username) {
      return {isDifferent: true}
    }
    return null;
  }
}
