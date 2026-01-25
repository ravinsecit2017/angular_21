import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-master',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './user-master.html',
  styleUrls: ['./user-master.css'],
})
export class UserMaster {
  userObj = {
    id: 0,
    name: "",
    username: "",
    email: "",
    password: '',
    city: '',
    state: '',
    pincode: ''
  }

  saveUser() {
    console.log('Saved user', this.userObj);
    alert('User saved');
  }
}
