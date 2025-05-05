import { Component } from '@angular/core';
import { UtilitiesModule } from '../../core/utilities/utilities/utilities.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-support-form',
  imports: [
     UtilitiesModule,
  ],
  templateUrl: './support-form.component.html',
  styleUrl: './support-form.component.scss'
})
export class SupportFormComponent {
  supportForm!: FormGroup;
  IsFormSubmitted: boolean = false;
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.supportForm = this.fb.group({

      bugs: ['', Validators.required],
      priority: ['' , Validators.required],
      assignee: ['' , Validators.required],
      image: [''],
      date:[''],
      area: ['', Validators.required],
      description: [''],
      url: ['', [Validators.required, Validators.pattern('https?://.+')]], 
    });
  }


  imagePreview: string | ArrayBuffer | null = null;
  
  bugOptions = [
    { label: 'UI Bug', value: 'ui' },
    { label: 'Crash', value: 'crash' },
  ];
  priorityOptions = [
    { label: 'High', value: 'high' },
    { label: 'Medium', value: 'medium' },
  ];
  assigneeOptions = [
    { label: 'John Doe', value: 'john' },
    { label: 'Jane Smith', value: 'jane' },
  ];
  areaOptions = [
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' },
  ];

  onSubmit() {
    this.IsFormSubmitted = true;
    if (this.supportForm.valid) {
      console.log('✅ Form Submitted:', this.supportForm.value);
      // Add your API call or Firebase logic here
    } else {
      console.warn('❌ Form is invalid. Please fill all required fields.');
      this.supportForm.markAllAsTouched();
    }
  }

  Reset() {
    this.supportForm.reset();
    this.IsFormSubmitted = false;
  }

  onBasicUploadAuto($event:any){

    console.log($event.files[0]);
  }
}
