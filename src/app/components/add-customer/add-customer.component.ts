// add-customer.component.ts
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
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputIconModule } from 'primeng/inputicon';
import { TabsModule } from 'primeng/tabs';
import { DividerModule } from 'primeng/divider'; // Add this for divider

@Component({
  selector: 'app-add-customer',
  standalone: true, // Update to standalone component
  imports: [
    UtilitiesModule,
    SelectModule,
    TabsModule,
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    EditorModule,
    InputTextModule,
    PasswordModule,
    ColorPickerModule,
    CheckboxModule,
    ButtonModule,
    RadioButtonModule,
    InputIconModule,
    DividerModule // Add this for divider
  ],
  templateUrl: './add-customer.component.html'
})
export class AddCustomerComponent {
  businessForm!: FormGroup;
  individualForm!: FormGroup;
  IsFormSubmitted: boolean = false;
  value: number = 1;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createbusinessForm();
    this.createindividualForm();
  
  }
  createbusinessForm(){
    this.businessForm = this.fb.group({
      businessName: ['', Validators.required],
      businessEmail: ['' ,Validators.required , Validators.email],
      email: [''],
      businessmobile: [''],
      businessPhone: [''],
      abn: [''],
      siteAddress: [''],
      customerType: ['business'],
      streetNo: [''],
      streetName: [''],
      suburb: [''],
      state: [''],
      postcode: [''],
      contactMobile: [''],
      contactEmail: ['', Validators.email],
      contactName: [''],
      contactPhone: [''],
    });
  }
  createindividualForm(){
    this.individualForm = this.fb.group({
      customerName: ['', Validators.required],
      customerEmail: ['' , Validators.required , Validators.email],
      email: [''],
      mobile: [''],
      phone: [''],
      abn: [''],
      siteAddress: [''],
      customerType: ['  individual'],
      streetNo: [''],
      streetName: [''],
      suburb: [''],
      state: [''],
      postcode: [''],
    });
  }

  onSubmitbusiness() {
    this.IsFormSubmitted = true;
    if (this.businessForm.invalid) {}
    else {
      console.log(this.businessForm.value);
    }
  }
  onSubmitindividual() {
    this.IsFormSubmitted = true;
    if (this.individualForm.invalid) {}
    else {
      console.log(this.individualForm.value);
    }
  }

  Reset() {
    this.businessForm.reset();
    this.IsFormSubmitted = false;
  }

 

}