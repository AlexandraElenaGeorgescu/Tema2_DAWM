import { AbstractControl, ValidatorFn } from '@angular/forms';

export function capitalLetterValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const name = control.value;
    if (!name) {
      return null;
    }
    const firstLetter = name.charAt(0);
    if (firstLetter !== firstLetter.toUpperCase()) {
      return { capitalLetter: { value: control.value } };
    }
    return null;
  };
}