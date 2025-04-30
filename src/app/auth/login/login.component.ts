import { Component } from '@angular/core';
import { UtilitiesModule } from '../../core/utilities/utilities/utilities.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [UtilitiesModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  LoginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  ForgotPasswordForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  IsFormSubmitted: boolean = false;
  IsForgotFormSubmitted: boolean = false;
  showForgotPassword: boolean = false;

  constructor() { }

  toggleForgotPassword() {
    this.showForgotPassword = !this.showForgotPassword;
    this.Reset();
  }

  OnSubmit() {
    this.IsFormSubmitted = true;
    if (this.LoginForm.invalid) {}
    else {
      console.log(this.LoginForm.value);
    }
  }

  OnForgotPasswordSubmit() {
    this.IsForgotFormSubmitted = true;
    if (this.ForgotPasswordForm.invalid) {}
    else {
      console.log('Password reset requested for:', this.ForgotPasswordForm.value.email);
      // Here you would typically call a service to handle the password reset
      // For example: this.authService.requestPasswordReset(this.ForgotPasswordForm.value.email)
      
      // Show success message or redirect as needed
      alert('Password reset instructions have been sent to your email if it exists in our system.');
      this.toggleForgotPassword(); // Return to login form
    }
  }

  Reset() {
    this.LoginForm.reset();
    this.ForgotPasswordForm.reset();
    this.IsFormSubmitted = false;
    this.IsForgotFormSubmitted = false;
  }
}