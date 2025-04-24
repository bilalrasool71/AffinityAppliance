import { Component } from '@angular/core';
import { UtilitiesModule } from '../../core/utilities/utilities/utilities.module';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { Password, PasswordModule } from 'primeng/password';
import { ColorPickerModule } from 'primeng/colorpicker';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-add-company',
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
  templateUrl: './add-company.component.html',
  styleUrl: './add-company.component.scss'
})
export class AddCompanyComponent {
  companyForm!: FormGroup;
  IsFormSubmitted: boolean = false;
  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    this.companyForm = this.fb.group({
      companyName: ['', Validators.required],
      companyCode: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      companyTypes: ['', Validators.required],
      timeZone: ['', Validators.required],
      mobile: ['', Validators.required],
      state: ['', [Validators.required]], 
      color: ['black'],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      website: ['', Validators.pattern('https?://.+')],
      description: [''],
    });
  }




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
  companyTypes = [
    { label: 'Private', value: 'Private' },
    { label: 'Public', value: 'Public' },
    { label: 'LLC', value: 'LLC' },
    { label: 'Non-Profit', value: 'Non-Profit' }
  ];
  timeZones = [
    'UTC-12:00', 'UTC-11:00', 'UTC-10:00', 'UTC-09:00', 'UTC-08:00',
    'UTC-07:00', 'UTC-06:00', 'UTC-05:00', 'UTC-04:00', 'UTC-03:00',
    'UTC-02:00', 'UTC-01:00', 'UTC+00:00', 'UTC+01:00', 'UTC+02:00',
    'UTC+03:00', 'UTC+04:00', 'UTC+05:00', 'UTC+06:00', 'UTC+07:00',
    'UTC+08:00', 'UTC+09:00', 'UTC+10:00', 'UTC+11:00', 'UTC+12:00'
  ];

  onSubmit() {
    this.IsFormSubmitted = true;
    if(this.companyForm.invalid) {}
    else {
      console.log(this.companyForm.value);
    };
  }
  
  Reset() {
    this.companyForm.reset();
    this.IsFormSubmitted = false;
  }
}