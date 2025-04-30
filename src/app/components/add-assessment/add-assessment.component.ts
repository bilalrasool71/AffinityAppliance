import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-add-assessment',
  imports: [CommonModule, ButtonModule,ButtonModule,ReactiveFormsModule,FloatLabelModule,InputTextModule,SelectModule,
    RadioButtonModule,InputNumberModule,FileUploadModule,HttpClientModule ],
  templateUrl: './add-assessment.component.html',
  styleUrl: './add-assessment.component.scss'
})
export class AddAssessmentComponent {
  value: number = 0;
  customerForm!: FormGroup;
  IsFormSubmitted: boolean = false;
  constructor( private fb: FormBuilder ){}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      customerType: [''],
      businessName: [''],
      tradingAs: [''],
      abn: [''],
      industryType: [''],
      name: [''],
      email: [''],
      mobile: [''],
      phone: [''],
      position: [''],
      secondaryContact: [''],
    });
  }
  industryTypes:any = [
    { label: 'Business', value: 'business' },
    { label: 'Residential', value: 'residential' },
  ];
  onSubmit(){
    this.IsFormSubmitted = true;
   
}
utilityBillPhotos: any[] = [
  { objectURL: 'https://www.w3schools.com/howto/img_avatar.png' },
  { objectURL: 'https://www.w3schools.com/howto/img_avatar.png' },
  { objectURL: 'https://www.w3schools.com/howto/img_avatar.png' },  
];
frontagePhotos: any[] = [
  { objectURL: 'https://www.w3schools.com/howto/img_avatar.png' },
  { objectURL: 'https://www.w3schools.com/howto/img_avatar.png' },
  { objectURL: 'https://www.w3schools.com/howto/img_avatar.png' }, 
];
}