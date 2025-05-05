// add-customer.component.ts
import { Component } from '@angular/core';
import { UtilitiesModule } from '../../core/utilities/utilities/utilities.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-customer',
  standalone: true, // Update to standalone component
  imports: [
    UtilitiesModule,
 
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