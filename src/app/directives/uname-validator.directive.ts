import { Directive, Injectable } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

/* @Injectable({
  providedIn: 'root'
}) */
@Directive({
  selector: '[appUnameValidator]',
  providers: [
    {
      provide: NG_VALIDATORS, 
      useExisting: UnameValidatorDirective,
      multi: true
    }
  ]
})
export class UnameValidatorDirective implements Validator {

  //constructor() { }
  //{[key: string]: any}
  //ValidationErrors
  validate(control: AbstractControl): ValidationErrors | null {
      const value = control.value as string;

      if(value && !value.includes('.')) {
        return { 'unameInValid': true};
      } else {
        return null;
      }

      //return !control.value.includes('.') ? { 'unameInValid': true} : null;
      
  }

}
