import {
  AbstractControl,
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

  // DO NOT USE - check later something is wrong!
  static checkUname(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (value && !value.includes('.')) {
        console.log(`check User Name: ${value} - Wrong`);
        return { 'unameInValid': true };
      } else {
        console.log(`check User Name: ${value} - Correct`);
        return null;
      }
    };
  }
}
