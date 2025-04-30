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
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-customer-list',
  imports: [CommonModule, DropdownModule, RadioButtonModule, IconFieldModule, InputIcon, IconField, InputTextModule,
    ToastModule,FormsModule, TableModule, ButtonModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {
  selectedStatus: string = 'Active';
  selectedEntries: number = 50;
  entriesOptions = [10, 25, 50, 100];
  searchQuery: string = '';

  customers  = [
    {
      customerType: 'Business',
      customerName: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      mobile: '0987654321',
      abn: 'ABN123456789',
      siteAddress: '123 Business Ave',
      streetNo: '123',
      streetName: 'Business Ave',
      suburb: 'Suburb 1',
      state: 'State 1',
      postcode: '12345'
    },
    {
      customerType: 'Individual',
      customerName: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '2233445566',
      mobile: '6655443322',
      abn: 'ABN987654321',
      siteAddress: '456 Residential Rd',
      streetNo: '456',
      streetName: 'Residential Rd',
      suburb: 'Suburb 2',
      state: 'State 2',
      postcode: '67890'
    },
    {
      customerType: 'Business',
      customerName: 'ACME Corp',
      email: 'contact@acme.com',
      phone: '3344556677',
      mobile: '7766554433',
      abn: 'ABN123123123',
      siteAddress: '789 Industrial St',
      streetNo: '789',
      streetName: 'Industrial St',
      suburb: 'Suburb 3',
      state: 'State 3',
      postcode: '11223'
    },
    {
      customerType: 'Individual',
      customerName: 'Michael Johnson',
      email: 'michael.johnson@example.com',
      phone: '4455667788',
      mobile: '8877665544',
      abn: 'ABN223344556',
      siteAddress: '101 Residential Ln',
      streetNo: '101',
      streetName: 'Residential Ln',
      suburb: 'Suburb 4',
      state: 'State 4',
      postcode: '33445'
    },
    {
      customerType: 'Business',
      customerName: 'Global Enterprises',
      email: 'info@global.com',
      phone: '5566778899',
      mobile: '9988776655',
      abn: 'ABN334455667',
      siteAddress: '202 Commerce Blvd',
      streetNo: '202',
      streetName: 'Commerce Blvd',
      suburb: 'Suburb 5',
      state: 'State 5',
      postcode: '55667'
    },
    {
      customerType: 'Individual',
      customerName: 'Sarah Parker',
      email: 'sarah.parker@example.com',
      phone: '6677889900',
      mobile: '0099887766',
      abn: 'ABN445566778',
      siteAddress: '303 Residential St',
      streetNo: '303',
      streetName: 'Residential St',
      suburb: 'Suburb 6',
      state: 'State 6',
      postcode: '66778'
    },
    {
      customerType: 'Business',
      customerName: 'Tech Solutions',
      email: 'support@techsolutions.com',
      phone: '7788990011',
      mobile: '1100998877',
      abn: 'ABN556677889',
      siteAddress: '404 Tech Park',
      streetNo: '404',
      streetName: 'Tech Park',
      suburb: 'Suburb 7',
      state: 'State 7',
      postcode: '77889'
    },
    {
      customerType: 'Individual',
      customerName: 'David Lee',
      email: 'david.lee@example.com',
      phone: '8899001122',
      mobile: '2211334455',
      abn: 'ABN667788990',
      siteAddress: '505 Oak St',
      streetNo: '505',
      streetName: 'Oak St',
      suburb: 'Suburb 8',
      state: 'State 8',
      postcode: '99000'
    }
  ];

  onSearch() {
    // Implement search logic here
    console.log('Searching for:', this.searchQuery);
  }
}

