import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  
  
  constructor(private router: Router) {}

  

  onSubmit() {
    if (this.email === 'ozachirag22@gmail.com' && this.password === 'Abcd1!') {
      this.router.navigate(['/chatbot'])
      // Navigate to login page here
    } else {
      console.log('Login failed');
    }
  }
}
