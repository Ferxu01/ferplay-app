import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appDefaultOptionSelect]',
  providers: [{provide: NG_VALIDATORS, useExisting: DefaultOptionSelectDirective, multi: true}]
})
export class DefaultOptionSelectDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    if (+control.value === 0) {
      return { defaultOption: true };
    }

    return null;
  }
}
