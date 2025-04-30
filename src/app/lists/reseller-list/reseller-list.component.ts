import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { IconField, IconFieldModule } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-reseller-list',
  imports: [CommonModule, DropdownModule, RadioButtonModule, IconFieldModule, InputIcon, IconField, InputTextModule,
    FormsModule, TableModule, ButtonModule],
  templateUrl: './reseller-list.component.html',
  styleUrl: './reseller-list.component.scss'
})
export class ResellerListComponent {
  selectedStatus: string = 'Active';
  selectedEntries: number = 50;
  entriesOptions = [10, 25, 50, 100];
  searchQuery: string = '';

  resellers  = [
    {
      resellerType: 'Retail',
      resellerName: 'ABC Retailers',
      email: 'abc@retail.com',
      phone: '1234567890',
      gst: 'GST12345',
      officeAddress: '123 Retail St',
      streetNo: '123',
      streetName: 'Retail St',
      suburb: 'Suburb 1',
      state: 'State 1',
      postcode: '12345'
    },
    {
      resellerType: 'Wholesale',
      resellerName: 'XYZ Wholesalers',
      email: 'xyz@wholesale.com',
      phone: '9876543210',
      gst: 'GST67890',
      officeAddress: '456 Wholesale Ave',
      streetNo: '456',
      streetName: 'Wholesale Ave',
      suburb: 'Suburb 2',
      state: 'State 2',
      postcode: '67890'
    },
    {
      resellerType: 'Retail',
      resellerName: 'LMN Retailers',
      email: 'lmn@retail.com',
      phone: '1122334455',
      gst: 'GST11223',
      officeAddress: '789 Retail Rd',
      streetNo: '789',
      streetName: 'Retail Rd',
      suburb: 'Suburb 3',
      state: 'State 3',
      postcode: '11223'
    },
    {
      resellerType: 'Wholesale',
      resellerName: 'QRS Wholesalers',
      email: 'qrs@wholesale.com',
      phone: '2233445566',
      gst: 'GST44556',
      officeAddress: '101 Wholesale Blvd',
      streetNo: '101',
      streetName: 'Wholesale Blvd',
      suburb: 'Suburb 4',
      state: 'State 4',
      postcode: '44556'
    },
    {
      resellerType: 'Retail',
      resellerName: 'PQR Retailers',
      email: 'pqr@retail.com',
      phone: '3344556677',
      gst: 'GST55667',
      officeAddress: '202 Retail Ln',
      streetNo: '202',
      streetName: 'Retail Ln',
      suburb: 'Suburb 5',
      state: 'State 5',
      postcode: '55667'
    },
    {
      resellerType: 'Wholesale',
      resellerName: 'TUV Wholesalers',
      email: 'tuv@wholesale.com',
      phone: '4455667788',
      gst: 'GST66778',
      officeAddress: '303 Wholesale Rd',
      streetNo: '303',
      streetName: 'Wholesale Rd',
      suburb: 'Suburb 6',
      state: 'State 6',
      postcode: '66778'
    },
    {
      resellerType: 'Retail',
      resellerName: 'DEF Retailers',
      email: 'def@retail.com',
      phone: '5566778899',
      gst: 'GST77889',
      officeAddress: '404 Retail Ave',
      streetNo: '404',
      streetName: 'Retail Ave',
      suburb: 'Suburb 7',
      state: 'State 7',
      postcode: '77889'
    },
    {
      resellerType: 'Wholesale',
      resellerName: 'GHI Wholesalers',
      email: 'ghi@wholesale.com',
      phone: '6677889900',
      gst: 'GST88990',
      officeAddress: '505 Wholesale Blvd',
      streetNo: '505',
      streetName: 'Wholesale Blvd',
      suburb: 'Suburb 8',
      state: 'State 8',
      postcode: '88990'
    },
    {
      resellerType: 'Retail',
      resellerName: 'JKL Retailers',
      email: 'jkl@retail.com',
      phone: '7788990011',
      gst: 'GST99001',
      officeAddress: '606 Retail Rd',
      streetNo: '606',
      streetName: 'Retail Rd',
      suburb: 'Suburb 9',
      state: 'State 9',
      postcode: '99001'
    },
    {
      resellerType: 'Wholesale',
      resellerName: 'MNO Wholesalers',
      email: 'mno@wholesale.com',
      phone: '8899001122',
      gst: 'GST10112',
      officeAddress: '707 Wholesale Ln',
      streetNo: '707',
      streetName: 'Wholesale Ln',
      suburb: 'Suburb 10',
      state: 'State 10',
      postcode: '10112'
    }
  ];


  onSearch() {
    // Implement search logic here
    console.log('Searching for:', this.searchQuery);
  }
}

