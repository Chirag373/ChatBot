import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  fullName: string = "";
  email: string = "";
  password: string = "";

  onSubmit() {
    console.log('Signup successful');
    // Navigate to login page here
  }
}
