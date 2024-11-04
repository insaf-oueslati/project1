import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';
import { Compte } from '../model/compte';

@Component({
  selector: 'app-register',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponenet {
  user: Compte = {
    idV: 0, // Initialize with a default value
    nom: '',
    email: '',
    password: '',
    role: ''
  };

  constructor(private router: Router, private signupService: SignupService) {}

  onSubmit() {
    this.signupService.register(this.user).subscribe(
      response => {
        console.log(response);
        alert('Registration successful');
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Registration error:', error);
        alert('Error during registration. Please try again.');
      }
    );
  }
}
