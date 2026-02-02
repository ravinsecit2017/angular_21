import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginObject: LoginModel = new LoginModel();
  router = inject(Router);
  http = inject(HttpClient);
  
  onLogin() {
    console.log("Login", this.loginObject)
    // if (this.loginObject.emailId == "admin@gmail.com" && this.loginObject.password == "123456") {
    //   this.router.navigate(['/signal']);
    // } else {
    //   alert("Invalid Credentials");
    // }
    this.http.post<any>('https://api.freeprojectapi.com/api/UserApp/login', this.loginObject).subscribe({
      next: (response) => {
        console.log("Response:", response);
        this.router.navigate(['/signal']);
        localStorage.setItem('loggedUserID', response.data.userId);
      },
      error: (error) => {
        console.error("Error:", error);
        alert("Login failed. Please try again.");
      }
    })
  }
}

class LoginModel {
  emailId: string;
  password: string;

  constructor() {
    this.emailId = '';
    this.password = '';
  }
}
