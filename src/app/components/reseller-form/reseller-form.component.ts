import { Component } from '@angular/core';
import { UtilitiesModule } from '../../core/utilities/utilities/utilities.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reseller-form',
  imports: [
    UtilitiesModule,
],
  templateUrl: './reseller-form.component.html',
  styleUrl: './reseller-form.component.scss'
})
export class ResellerFormComponent {
  customerForm!: FormGroup;
  IsFormSubmitted: boolean = false;
  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    this.customerForm = this.fb.group({
      resellerName: ['', Validators.required],
      email: [''],
      gst: [''],
      phone: [''],
      officeAddress: [''],
      resellerType: [''],
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
