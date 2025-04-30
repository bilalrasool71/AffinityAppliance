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
  selector: 'app-user-list',
  imports: [CommonModule, DropdownModule, RadioButtonModule, IconFieldModule, InputIcon, IconField, InputTextModule,
    ToastModule,FormsModule, TableModule, ButtonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  selectedStatus: string = 'Active';
  selectedEntries: number = 50;
  entriesOptions = [10, 25, 50, 100];
  searchQuery: string = '';

  users = [
    { username: 'Alex@esena.com.au', firstname: 'Alex', lastname: 'Malbacias', role: 'Sales Associate', status: 'Active', state: 'PH', lastUpdated: '12/02/2025 10:06 AM' },
    { username: 'Anjelika@esena.com.au', firstname: 'Anjelika', lastname: 'Pangan', role: 'Administrator', status: 'Active', state: 'PH', lastUpdated: '05/08/2024 02:12 PM' },
    { username: 'Bilal@esena.com.au', firstname: 'Bilal', lastname: 'Mehdi', role: 'Marketing', status: 'Active', state: 'NSW', lastUpdated: '20/12/2023 04:28 PM' },
    { username: 'Cara@esena.com.au', firstname: 'Cara', lastname: 'Golati', role: 'Sales Person', status: 'Active', state: 'VIC', lastUpdated: '17/02/2025 01:40 PM' },
    { username: 'Charina@esena.com.au', firstname: 'Charina', lastname: 'Quillan', role: 'Administrator', status: 'Active', state: 'PH', lastUpdated: '04/01/2023 07:20 PM' },
    { username: 'Charlotte@esena.com.au', firstname: 'Charlotte', lastname: 'Corpio', role: 'Administrator', status: 'Active', state: 'PH', lastUpdated: '27/02/2025 04:08 PM' },
    { username: 'Cheers@esena.com.au', firstname: 'Cheers', lastname: 'Ybanez', role: 'Sales Associate', status: 'Active', state: 'PH', lastUpdated: '12/02/2025 10:07 AM' },
    { username: 'Christian@esena.com.au', firstname: 'Christian', lastname: 'Corpio', role: 'Super Admin', status: 'Active', state: 'NSW', lastUpdated: '14/06/2022 12:32 AM' },
    { username: 'accounts@esena.com.au', firstname: 'Christian (FW)', lastname: 'Corpio', role: 'Field Worker (Employees)', status: 'Active', state: 'SA', lastUpdated: '15/05/2023 06:31 PM' },
  ];

  onSearch() {
    // Implement search logic here
    console.log('Searching for:', this.searchQuery);
  }
}

