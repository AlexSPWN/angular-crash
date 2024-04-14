import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appMyvalidator]',
  providers: [
    {
      provide: NG_VALIDATORS, 
      useExisting: MyvalidatorDirective,
      multi: true
    }
  ]
})
export class MyvalidatorDirective {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {

    const value: string = control.value;
    let fine: boolean = false;

    if(value && value.includes('.')) {
      fine = true;
    } else {
fine = false;
    }

    return fine ? null : {'invalidMy': true};
  }

}