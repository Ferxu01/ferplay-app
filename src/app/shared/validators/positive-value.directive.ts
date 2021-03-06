import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPositiveValue]',
  providers: [{provide: NG_VALIDATORS, useExisting: PositiveValueDirective, multi: true}]
})
export class PositiveValueDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    if (+control.value <= 0) {
      return { negativeNumber: true };
    }

    return null;
  }
}
