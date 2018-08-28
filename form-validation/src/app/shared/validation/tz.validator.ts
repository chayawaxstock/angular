import { AbstractControl } from '@angular/forms';

export function ValidateTz(control: AbstractControl) {
    let total = 0;
    let i;
    if (control.value.length < 9||control.value.length>9)
        return null;
    for (i = 0; i < 9; i++) {
        let x = (((i % 2) + 1) * (control.value).charAt(i));
        total += Math.floor(x / 10) + x % 10;
    }
    if (total % 10 != 0)
        return { validTz: true };
    else null;

}


