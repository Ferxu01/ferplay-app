import { Directive } from '@angular/core';
import { FormGroup, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordMatch]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordMatchDirective, multi: true}]
})
export class PasswordMatchDirective implements Validator {

  constructor() { }

  validate(group: FormGroup): { [key: string]: any } | null {
    if (group instanceof FormGroup) {
      if (Object.values(group.value) && group.value.password !== group.value.password2) {
        return { passwordMatch: true };
      }
    }

    return null;
  }
}
