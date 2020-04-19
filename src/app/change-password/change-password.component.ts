import { Component, OnInit } from '@angular/core';
import {Form, ValidationErrors, FormGroup, FormControl, Validators} from '@angular/forms';
import {PasswordValidator} from '../validators/password.validator';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  newPassword: string;
  changePassForm = new FormGroup(
    {
    oldPassword: new FormControl('', [Validators.required, Validators.minLength(5)], [PasswordValidator.oldPasswordValidator]),
    newPass: new FormGroup(
        {
            newPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
            confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5)])
        }, [], PasswordValidator.passwordMatchValidator)
      });

      get OldPassword() {      // console.log(this.changePassForm.get("oldPassword"));
        return this.changePassForm.get('oldPassword');

      }
      get NewPass() {
        console.log(this.changePassForm.get('newPass'));
        return this.changePassForm.get('newPass');
      }
      get NewPassword() {
          return this.changePassForm.get('newPass').get('newPassword').value;
      }
      get ConfirmPassword() {
        return this.changePassForm.get('newPass').get('confirmPassword').value;
      }
    changePassword() {
      console.log(this.changePassForm.value);
      if (this.changePassForm.valid) {
        this.newPassword = this.changePassForm.get('newPass').get('newPassword').value;
      }
      // this.changePassForm.get("oldPassword").value
    }

  }

