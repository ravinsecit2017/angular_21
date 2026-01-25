import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-user-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-user-form.html',
  styleUrl: './reactive-user-form.css',
})
export class ReactiveUserForm {

  userForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl(''),
    password: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    pincode: new FormControl('')
  })

}
