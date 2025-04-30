import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ColorPickerModule } from 'primeng/colorpicker';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { SelectModule } from 'primeng/select';
import { InputIconModule } from 'primeng/inputicon';
import { UtilitiesModule } from '../../core/utilities/utilities/utilities.module';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';
import { SplitButtonModule } from 'primeng/splitbutton';

@Component({
  selector: 'app-create-quotation',
  standalone: true,
  imports: [
    UtilitiesModule,
    SplitButtonModule,
    SelectModule,
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    EditorModule,
    InputTextModule,
    PasswordModule,
    ColorPickerModule,
    CheckboxModule,
    CalendarModule,
    ButtonModule,
    RadioButtonModule,
    InputIconModule,
    TableModule,
    InputNumberModule
  ],
  templateUrl: './create-quotation.component.html',
  styleUrl: './create-quotation.component.scss'
})
export class CreateQuotationComponent implements OnInit {
  quotationForm!: FormGroup;
  IsFormSubmitted: boolean = false;
  productList: any[] = [];
  editIndex: number = -1;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.quotationForm = this.fb.group({
      exJob: [''],
      jobType: [''],
      customer: [''],
      quotationDate: [''],
      validfor: [''],
      siteAddress: [''],
      reference: [''],
      vakiduntil: [''],
      gst: [''],
      logoTemplate: [''],
      validuntil: [''],
      sendReminders: [''],
      newJob: [''],
      agreement: [''],
      paymentRequired: [''],
      receivenotifications: [''],
      text: [''],

      products: this.fb.array([this.createProduct()])
    });

    this.subscribeToProductChanges(0);
  }

  get products(): FormArray {
    return this.quotationForm.get('products') as FormArray;
  }

  createProduct(): FormGroup {
    return this.fb.group({
      description: [''],
      productCode: [''],
      quantity: [1],
      discount: [0],
      unitPrice: [0],
      amount: [{ value: 0, disabled: true }]
    });
  }

  subscribeToProductChanges(index: number) {
    const productForm = this.products.at(index) as FormGroup;
    productForm.get('quantity')?.valueChanges.subscribe(() => this.updateAmount(index));
    productForm.get('unitPrice')?.valueChanges.subscribe(() => this.updateAmount(index));
    productForm.get('discount')?.valueChanges.subscribe(() => this.updateAmount(index));
  }


  updateAmount(index: number) {
    const productForm = this.products.at(index) as FormGroup;
    const amount = this.calculateAmount(productForm);
    productForm.get('amount')?.patchValue(amount, { emitEvent: false });
  }

  addProduct() {
    if (this.products.length > 0) {
      const product = this.products.at(0).value;
      const amount = this.calculateAmount(this.products.at(0) as FormGroup);

      if (this.editIndex >= 0) {
        this.productList[this.editIndex] = {
          ...product,
          amount: amount
        };
        this.editIndex = -1;
      } else {
        this.productList.push({
          ...product,
          amount: amount
        });
      }

      this.products.at(0).patchValue({
        description: '',
        productCode: '',
        quantity: 1,
        discount: 0,
        unitPrice: 0,
        amount: 0
      });
    }

  }

  onEdit(index: number) {
    const product = this.productList[index];
    this.editIndex = index;

    this.products.at(0).patchValue({
      description: product.description,
      productCode: product.productCode,
      quantity: product.quantity,
      discount: product.discount,
      unitPrice: product.unitPrice,
      amount: product.amount
    });
  }

  removeProduct(index: number) {
    this.productList.splice(index, 1);
    if (this.editIndex === index) {
      this.editIndex = -1;
      this.resetCurrentForm();
    }
  }

  resetCurrentForm() {
    this.products.at(0).patchValue({
      description: '',
      productCode: '',
      quantity: 1,
      discount: 0,
      unitPrice: 0,
      amount: 0
    });
  }

  calculateAmount(group: FormGroup): number {
    const quantity = group.get('quantity')?.value || 0;
    const unitPrice = group.get('unitPrice')?.value || 0;
    const discount = group.get('discount')?.value || 0;

    return quantity * unitPrice * (1 - discount / 100);
  }

  updateProductsFormArray() {
    while (this.products.length > 1) {
      this.products.removeAt(1);
    }

    this.productList.forEach(product => {
      const productFormGroup = this.fb.group({
        description: [product.description],
        productCode: [product.productCode],
        quantity: [product.quantity],
        discount: [product.discount],
        unitPrice: [product.unitPrice],
        amount: [{ value: product.amount, disabled: true }]
      });
      this.products.push(productFormGroup);
    });
  }

  onSubmit() {

    const formData = {
      ...this.quotationForm.getRawValue(),
      products: [...this.productList]
    };

    console.log('Product List:', this.productList);
    console.log('Form Values with Products:', formData);

  }

  jobTypes = [
    { label: 'test data', code: 'JT1' },
    { label: 'Text', code: 'JT2' },
  ];



}