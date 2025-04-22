import { Component } from '@angular/core';
import { UtilitiesModule } from '../../core/utilities/utilities/utilities.module';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ColorPickerModule } from 'primeng/colorpicker';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
@Component({
  selector: 'app-add-user',
 imports: [UtilitiesModule,SelectModule,
  CommonModule,
  ReactiveFormsModule,
  DropdownModule,
  EditorModule,
  InputTextModule,
  PasswordModule,
  ColorPickerModule,
  CheckboxModule,
  ButtonModule
 ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  IsFormSubmitted: boolean = false;
  sendEmail = false;
  userForm!: FormGroup;

  states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
    'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
    'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
    'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
    'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
    'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  roles = [
    { label: 'Super Admin', value: 'superadmin' },
    { label: 'Admin', value: 'admin' },
    { label: 'User', value: 'user' }
  ];

  timeZones = [
    'UTC-12:00', 'UTC-11:00', 'UTC-10:00', 'UTC-09:00', 'UTC-08:00',
    'UTC-07:00', 'UTC-06:00', 'UTC-05:00', 'UTC-04:00', 'UTC-03:00',
    'UTC-02:00', 'UTC-01:00', 'UTC+00:00', 'UTC+01:00', 'UTC+02:00',
    'UTC+03:00', 'UTC+04:00', 'UTC+05:00', 'UTC+06:00', 'UTC+07:00',
    'UTC+08:00', 'UTC+09:00', 'UTC+10:00', 'UTC+11:00', 'UTC+12:00'
  ];

  userTypes = ['Admin', 'Manager', 'Employee', 'Customer'];

  constructor(private fb: FormBuilder) {
  
  }
ngOnInit(): void {
  this.userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.pattern(/^\d{10,15}$/)]],
    role: ['', Validators.required],
    password: ['', Validators.required],
    state: [''],
    userType: [''],
    timeZone: [''],
    color: ['#000000'],
    emailFooter: [''],
    sendEmail: [false]
  });
}
OnSubmit() {
    this.IsFormSubmitted = true;
    if (this.userForm.valid) {
      console.log('✅ Form Submitted:', this.userForm.value);
      // Add your API call or Firebase logic here
    } else {
      console.warn('❌ Form is invalid. Please fill all required fields.');
      this.userForm.markAllAsTouched();
    }
  }

  Reset() {
    this.userForm.reset();
    this.IsFormSubmitted = false;
  }
}

