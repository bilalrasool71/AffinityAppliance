import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UtilitiesModule } from '../../core/utilities/utilities/utilities.module';

@Component({
  selector: 'app-add-assessment',
  imports: [ UtilitiesModule ],
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