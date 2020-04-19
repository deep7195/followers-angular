import { AbstractControl, ValidationErrors } from '@angular/forms';


export class UserNameValidators {
    static CannotContainSpaces(value: AbstractControl): ValidationErrors|null {
        console.log('test');
        if ((value.value as string).indexOf(' ') >= 0) {
            return {cannotcontainspaces: true};
        } else {
            null;
        }
    }
    static ShouldBeUnique(control: AbstractControl): Promise<ValidationErrors|null> {

      return new Promise((resolve, reject) =>
      setTimeout(() => {
        if (control.value === 'de@gm.com') {
            resolve({shouldbeunique: true});
        } else {
            resolve(null);
        }

      }, 2000));
    }
}
