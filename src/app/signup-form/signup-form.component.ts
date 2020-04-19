import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { UserNameValidators } from './username-validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent  {

  form = new FormGroup(
    { account: new FormGroup({
      username: new FormControl('', [Validators.required, UserNameValidators.CannotContainSpaces], UserNameValidators.ShouldBeUnique),
      password: new FormControl('', [Validators.required, Validators.maxLength(10)])
    })
    }
  );

 LogIn() {
   this.form.setErrors(
     {userinvalid: true}
   );
 }

  get UserName() {
    return this.form.get('account.username');
  }
}
