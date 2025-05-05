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
  selector: 'app-quotations-list',
  imports: [CommonModule, DropdownModule, RadioButtonModule, IconFieldModule, InputIcon, IconField, InputTextModule,
    ToastModule,FormsModule, TableModule, ButtonModule],
  templateUrl: './quotations-list.component.html',
  styleUrl: './quotations-list.component.scss'
})
export class QuotationsListComponent {
  selectedStatus: string = 'Active';
  selectedEntries: number = 50;
  entriesOptions = [10, 25, 50, 100];
  searchQuery: string = '';

  quotations = [
    {
      exJob: 'EX-101',
      jobType: 'Electrical',
      customer: 'Ali Khan',
      quotationDate: '2025-05-01',
      validfor: '15 days',
      siteAddress: 'Street 12, Lahore',
      reference: 'REF-1001',
      vakiduntil: '2025-05-16',
      gst: 'Yes',
      logoTemplate: 'Template A',
      validuntil: '2025-05-16',
      sendReminders: 'Yes',
      newJob: 'Yes',
      agreement: 'Signed',
      paymentRequired: '50%',
      receivenotifications: 'Yes',
      text: 'Install new wiring'
    },
    {
      exJob: 'EX-102',
      jobType: 'Plumbing',
      customer: 'Sara Ahmed',
      quotationDate: '2025-04-28',
      validfor: '10 days',
      siteAddress: 'House 22, Karachi',
      reference: 'REF-1002',
      vakiduntil: '2025-05-08',
      gst: 'No',
      logoTemplate: 'Template B',
      validuntil: '2025-05-08',
      sendReminders: 'No',
      newJob: 'No',
      agreement: 'Pending',
      paymentRequired: '100%',
      receivenotifications: 'No',
      text: 'Fix leaking pipes'
    },
    {
      exJob: 'EX-103',
      jobType: 'Painting',
      customer: 'Zain Malik',
      quotationDate: '2025-05-02',
      validfor: '20 days',
      siteAddress: 'Block C, Islamabad',
      reference: 'REF-1003',
      vakiduntil: '2025-05-22',
      gst: 'Yes',
      logoTemplate: 'Template C',
      validuntil: '2025-05-22',
      sendReminders: 'Yes',
      newJob: 'Yes',
      agreement: 'Signed',
      paymentRequired: '25%',
      receivenotifications: 'Yes',
      text: 'Paint full house exterior'
    },
    {
      exJob: 'EX-104',
      jobType: 'Cleaning',
      customer: 'Adeel Raza',
      quotationDate: '2025-04-30',
      validfor: '7 days',
      siteAddress: 'Phase 4, DHA',
      reference: 'REF-1004',
      vakiduntil: '2025-05-07',
      gst: 'No',
      logoTemplate: 'Template D',
      validuntil: '2025-05-07',
      sendReminders: 'No',
      newJob: 'Yes',
      agreement: 'Not Required',
      paymentRequired: '0%',
      receivenotifications: 'No',
      text: 'Deep cleaning of office'
    }
  ];
  
}
