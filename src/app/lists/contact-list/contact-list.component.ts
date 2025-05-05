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
  selector: 'app-contact-list',
  imports: [CommonModule, DropdownModule, RadioButtonModule, IconFieldModule, InputIcon, IconField, InputTextModule,
    ToastModule,FormsModule, TableModule, ButtonModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent {
  selectedStatus: string = 'Active';
  selectedEntries: number = 50;
  entriesOptions = [10, 25, 50, 100];
  searchQuery: string = '';
  contactList  = [
    {
      firstName: "Ali",
      lastName: "Khan",
      email: "ali.khan@example.com",
      mobile: "+971501234567",
      companyName: "TechSolutions",
      jobTitle: "Developer",
      website: "https://techsolutions.com",
      address: "Office 301, Business Bay",
      country: "UAE",
      city: "Dubai",
      message: "Looking forward to working with you."
    },
    {
      firstName: "Sara",
      lastName: "Ahmed",
      email: "sara.ahmed@example.com",
      mobile: "+971509876543",
      companyName: "Innovatech",
      jobTitle: "Marketing Manager",
      website: "https://innovatech.com",
      address: "Palm Jumeirah, Villa 22",
      country: "UAE",
      city: "Dubai",
      message: "Interested in collaboration."
    },
    {
      firstName: "Omar",
      lastName: "Farooq",
      email: "omar.farooq@example.com",
      mobile: "+971567894321",
      companyName: "NextGen Ltd.",
      jobTitle: "Project Lead",
      website: "https://nextgen.ae",
      address: "JLT, Cluster X, Tower 1",
      country: "UAE",
      city: "Abu Dhabi",
      message: "Please send me the proposal."
    },
    {
      firstName: "Nadia",
      lastName: "Hassan",
      email: "nadia.hassan@example.com",
      mobile: "+971502345678",
      companyName: "BrightWorks",
      jobTitle: "HR Director",
      website: "https://brightworks.io",
      address: "Marina Walk, Tower B",
      country: "UAE",
      city: "Sharjah",
      message: "Let's schedule a meeting next week."
    },
    {
      firstName: "Zaid",
      lastName: "Malik",
      email: "zaid.malik@example.com",
      mobile: "+971556789012",
      companyName: "AlphaTech",
      jobTitle: "CTO",
      website: "https://alphatech.com",
      address: "Silicon Oasis, Block C",
      country: "UAE",
      city: "Dubai",
      message: "Please share the documentation."
    },
    {
      firstName: "Nadia",
      lastName: "Hassan",
      email: "nadia.hassan@example.com",
      mobile: "+971502345678",
      companyName: "BrightWorks",
      jobTitle: "HR Director",
      website: "https://brightworks.io",
      address: "Marina Walk, Tower B",
      country: "UAE",
      city: "Sharjah",
      message: "Let's schedule a meeting next week."
    },
    {
      firstName: "Zaid",
      lastName: "Malik",
      email: "zaid.malik@example.com",
      mobile: "+971556789012",
      companyName: "AlphaTech",
      jobTitle: "CTO",
      website: "https://alphatech.com",
      address: "Silicon Oasis, Block C",
      country: "UAE",
      city: "Dubai",
      message: "Please share the documentation."
    },
    {
      firstName: "Nadia",
      lastName: "Hassan",
      email: "nadia.hassan@example.com",
      mobile: "+971502345678",
      companyName: "BrightWorks",
      jobTitle: "HR Director",
      website: "https://brightworks.io",
      address: "Marina Walk, Tower B",
      country: "UAE",
      city: "Sharjah",
      message: "Let's schedule a meeting next week."
    },
    {
      firstName: "Zaid",
      lastName: "Malik",
      email: "zaid.malik@example.com",
      mobile: "+971556789012",
      companyName: "AlphaTech",
      jobTitle: "CTO",
      website: "https://alphatech.com",
      address: "Silicon Oasis, Block C",
      country: "UAE",
      city: "Dubai",
      message: "Please share the documentation."
    }
    
  ];
  
}
