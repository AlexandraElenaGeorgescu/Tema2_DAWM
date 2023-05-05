import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function capitalLetterValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value as string;
      const isUppercase = value === value.toUpperCase();
      return isUppercase ? null : { uppercase: true };
    };
  }