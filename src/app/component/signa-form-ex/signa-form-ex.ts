import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormField, form } from '@angular/forms/signals';

@Component({
  selector: 'app-signa-form-ex',
  imports: [FormField, JsonPipe],
  templateUrl: './signa-form-ex.html',
  styleUrl: './signa-form-ex.css',
})
export class SignaFormEx {
  loginModel = signal({email: '', password: ''})

  loginForm = form(this.loginModel);

  // loginForm = form(this.loginModel, (schema) => {
  //   required(schema.email, {message: 'This is required'}),
  //   email()
  // })
}
