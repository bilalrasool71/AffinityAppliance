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
  LoginForm : FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  IsFormSubmitted: boolean = false;

  constructor() { }

  OnSubmit() {
    this.IsFormSubmitted = true;
    if(this.LoginForm.invalid) {}
    else {
      console.log(this.LoginForm.value);
    };
  }

  Reset() {
    this.LoginForm.reset();
    this.IsFormSubmitted = false;
  }
}
