import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { UtilitiesModule } from '../../core/utilities/utilities/utilities.module';


@Component({
  selector: 'app-create-quotation',
  standalone: true,
  imports: [
    UtilitiesModule,
 
  ],
  templateUrl: './create-quotation.component.html',
  styleUrl: './create-quotation.component.scss'
})
export class CreateQuotationComponent implements OnInit {
  quotationForm!: FormGroup;
  IsFormSubmitted: boolean = false;
  productList: any[] = [];
  editIndex: number = -1;
  totalAmount: number = 0;
  gstamount: number = 0;
  totalWithGST: number = 0;
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
   this.totalsCalculation()
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
    this.totalsCalculation()
  }

  removeProduct(index: number) {
    this.productList.splice(index, 1);
    if (this.editIndex === index) {
      this.editIndex = -1;
      this.resetCurrentForm();
    }
    this.totalsCalculation()
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


totalsCalculation() {
    let total = 0;
    this.productList.forEach(product => {
      total += product.amount;
    });
    this.totalAmount = total;
    console.log('Total:', total);
     this.gstamount = this.quotationForm.get('gst')?.value || 0;
    this.totalWithGST = +total + +this.gstamount;
    console.log('Total with GST:', this.totalWithGST);

  }

}