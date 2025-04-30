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
  selector: 'app-company-list',
  imports: [CommonModule, DropdownModule, RadioButtonModule, IconFieldModule, InputIcon, IconField, InputTextModule,
    ToastModule,FormsModule, TableModule, ButtonModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent {

  selectedStatus: string = 'Active';
  selectedEntries: number = 50;
  entriesOptions = [10, 25, 50, 100];
  searchQuery: string = '';

  companies = [
    {
      companyName: 'Tech Solutions',
      companyCode: 'TS01',
      email: 'info@techsolutions.com',
      type: 'IT',
      state: 'California',
      timeZone: 'PST',
      phone: '+1-123-456-7890',
      color: '#FF0000'
    },
    {
      companyName: 'Creative Hub',
      companyCode: 'CH02',
      email: 'hello@creativehub.com',
      type: 'Design',
      state: 'New York',
      timeZone: 'EST',
      phone: '+1-987-654-3210',
      color: '#00FF00'
    },
    {
      companyName: 'Finance World',
      companyCode: 'FW03',
      email: 'support@financeworld.com',
      type: 'Finance',
      state: 'Texas',
      timeZone: 'CST',
      phone: '+1-222-333-4444',
      color: '#0000FF'
    },
    {
      companyName: 'EduCore',
      companyCode: 'EC04',
      email: 'contact@educore.com',
      type: 'Education',
      state: 'Florida',
      timeZone: 'EST',
      phone: '+1-444-555-6666',
      color: '#FFA500'
    },
    {
      companyName: 'Health Plus',
      companyCode: 'HP05',
      email: 'care@healthplus.com',
      type: 'Healthcare',
      state: 'Washington',
      timeZone: 'PST',
      phone: '+1-777-888-9999',
      color: '#800080'
    },
    {
      companyName: 'Tech Solutions',
      companyCode: 'TS01',
      email: 'info@techsolutions.com',
      type: 'IT',
      state: 'California',
      timeZone: 'PST',
      phone: '+1-123-456-7890',
      color: '#FF0000'
    },
    {
      companyName: 'Creative Hub',
      companyCode: 'CH02',
      email: 'hello@creativehub.com',
      type: 'Design',
      state: 'New York',
      timeZone: 'EST',
      phone: '+1-987-654-3210',
      color: '#00FF00'
    },
    {
      companyName: 'BuildMasters',
      companyCode: 'BM06',
      email: 'projects@buildmasters.com',
      type: 'Construction',
      state: 'Nevada',
      timeZone: 'PST',
      phone: '+1-111-222-3333',
      color: '#008080'
    },
    {
      companyName: 'Green Energy',
      companyCode: 'GE07',
      email: 'energy@greenenergy.com',
      type: 'Energy',
      state: 'Oregon',
      timeZone: 'PST',
      phone: '+1-666-777-8888',
      color: '#228B22'
    }
  ];



  onSearch() {
    // Implement search logic here
    console.log('Searching for:', this.searchQuery);
  }


}
