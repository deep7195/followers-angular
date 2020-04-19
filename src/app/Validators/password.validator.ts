import {  ValidationErrors, AbstractControl } from '@angular/forms';

export class PasswordValidator implements ValidationErrors {
    public static oldPasswordValidator(control: AbstractControl): Promise<ValidationErrors>|null {
       return new Promise((resolve, reject) => {
                // setTimeout(()=>{
                if (control.value !== 'gamespot') {
                    resolve({ oldPasswordValidator: true });
                } else {
                    resolve(null);
                }
           // },50);
            });
    }
    public static passwordMatchValidator(control: AbstractControl): Promise<ValidationErrors>|null {
        return new Promise((resolve, reject) => {
          //  setTimeout(()=>            {
                if (control.get('newPassword').value != control.get('confirmPassword').value) {
                    resolve({passwordMatchValidator: true});
                } else {
                    resolve(null);
                }
         //    },50);
        });

    }
}
