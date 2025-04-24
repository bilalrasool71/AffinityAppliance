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
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputIconModule } from 'primeng/inputicon';
@Component({
  selector: 'app-add-customer',
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
          ButtonModule,
          RadioButtonModule,
          InputIconModule 
  ],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.scss'
})
export class AddCustomerComponent {
  customerForm!: FormGroup;
  IsFormSubmitted: boolean = false;
  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    this.customerForm = this.fb.group({
      customerName: ['', Validators.required],
      email: [''],
      mobile: [''],
      phone: [''],
      abn: [''],
      siteAddress: [''],
      customerType: [''],
      streetNo: [''],
      streetName: [''],
      suburb: [''],
      state: [''],
      postcode: [''],
    });
  }



  onSubmit() {
    this.IsFormSubmitted = true;
    if(this.customerForm.invalid) {}
    else {
      console.log(this.customerForm.value);
    };
  }

  Reset() {
    this.customerForm.reset();
    this.IsFormSubmitted = false;
  }

}
