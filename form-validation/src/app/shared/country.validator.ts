import { AbstractControl } from '@angular/forms';

export function ValidateUrl(control: AbstractControl) {
  if (!control.value.includes(control.value) ) {
    return { validCountry: true };
  }
  return null;
}