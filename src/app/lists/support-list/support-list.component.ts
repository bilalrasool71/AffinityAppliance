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
  selector: 'app-support-list',
  imports: [CommonModule, DropdownModule, RadioButtonModule, IconFieldModule, InputIcon, IconField, InputTextModule,
    ToastModule,FormsModule, TableModule, ButtonModule],
  templateUrl: './support-list.component.html',
  styleUrl: './support-list.component.scss'
})
export class SupportListComponent {

  selectedStatus: string = 'Active';
  selectedEntries: number = 50;
  entriesOptions = [10, 25, 50, 100];
  searchQuery: string = '';

   bugs = [
    {
      priority: 'High',
      assignee: 'Ali',
      image: 'https://example.com/bug1.png',
      date: '2025-05-02',
      area: 'Login Page',
      description: 'Login button not responding on click.',
      url: 'https://example.com/bug1-details'
    },
    {
      priority: 'Medium',
      assignee: 'Sara',
      image: 'https://example.com/bug2.png',
      date: '2025-05-01',
      area: 'Dashboard',
      description: 'Data not refreshing automatically.',
      url: 'https://example.com/bug2-details'
    },
    {
      priority: 'Low',
      assignee: 'Zain',
      image: 'https://example.com/bug3.png',
      date: '2025-04-30',
      area: 'Profile Section',
      description: 'Profile picture upload not working.',
      url: 'https://example.com/bug3-details'
    }
  ];
  

}
