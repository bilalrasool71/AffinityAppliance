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
  selector: 'app-contact-form',
  imports: [
    UtilitiesModule,
    SelectModule,
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
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  IsFormSubmitted: boolean = false;
  contactForm!: FormGroup;

  country = [
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


  constructor(private fb: FormBuilder) {
  
  }
ngOnInit(): void {
  this.contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.pattern(/^\d{10,15}$/)]],
    companyName: [''],
    jobTitle: [''],
    website: [''],
    address: [''],
    country: [''],
    city: [''],
    message: [''],
  });
}

onSubmit() {
  this.IsFormSubmitted = true;
  if(this.contactForm.invalid) {}
  else {
    console.log(this.contactForm.value);
  };
}

Reset() {
  this.contactForm.reset();
  this.IsFormSubmitted = false;
}
}


