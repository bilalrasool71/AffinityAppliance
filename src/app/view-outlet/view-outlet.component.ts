import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UtilitiesModule } from '../core/utilities/utilities/utilities.module';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-view-outlet',
  imports: [RouterOutlet, UtilitiesModule],
  templateUrl: './view-outlet.component.html',
  styleUrl: './view-outlet.component.scss'
})
export class ViewOutletComponent {
  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: ['/'],
      routerLinkActive: 'active'
    },
    {
      label: 'Customer',
      icon: 'pi pi-users',
      items: [
        {
          label: 'Add Customer',
          icon: 'pi pi-user-plus',
          routerLink: ['/app/add-customer'],
          routerLinkActive: 'active'
        },
        {
          label: 'Customer List',
          icon: 'pi pi-users',
          routerLink: ['/lists/customer-list'],
          routerLinkActive: 'active'
        }
      ]
    },
    {
      label: 'Company',
      icon: 'pi pi-building',
      items: [
        {
          label: 'Add Company',
          icon: 'pi pi-plus-circle',
          routerLink: ['/app/add-company'],
          routerLinkActive: 'active'
        },
        {
          label: 'Company List',
          icon: 'pi pi-list',
          routerLink: ['/lists/comany-list'],
          routerLinkActive: 'active'
        }
      ]
    },
    {
      label: 'User',
      icon: 'pi pi-user',
      items: [
        {
          label: 'Add User',
          icon: 'pi pi-user-plus',
          routerLink: ['/app/add-user'],
          routerLinkActive: 'active'
        },
        {
          label: 'User List',
          icon: 'pi pi-users',
          routerLink: ['/lists/user-list'],
          routerLinkActive: 'active'
        }
      ]
    },
    {
      label: 'Contact',
      icon: 'pi pi-id-card',
      items: [
        {
          label: 'Add Contact',
          icon: 'pi pi-plus-circle',
          routerLink: ['/app/add-contact'],
          routerLinkActive: 'active'
        },
        {
          label: 'Contact List',
          icon: 'pi pi-list',
          routerLink: ['/lists/contact-list'],
          routerLinkActive: 'active'
        }
      ]
    },
    {
      label: 'Reseller',
      icon: 'pi pi-sitemap',
      items: [
        {
          label: 'Add Reseller',
          icon: 'pi pi-plus-circle',
          routerLink: ['/app/add-reseller'],
          routerLinkActive: 'active'
        },
        {
          label: 'Reseller List',
          icon: 'pi pi-list',
          routerLink: ['/lists/reseller-list'],
          routerLinkActive: 'active'
        }
      ]
    },
    {
      label: 'Assessments',
      icon: 'pi pi-briefcase',
      items: [
        {
          label: 'New Assessment',
          icon: 'pi pi-plus-circle',
          routerLink: ['/app/add-assessment'],
          routerLinkActive: 'active'
        },
        // {
        //   label: 'Assessment List',
        //   icon: 'pi pi-list',
        //   routerLink: ['/lists/quotations-list'],
        //   routerLinkActive: 'active'
        // }
      ]
    },
    {
      label: 'Support',
      icon: 'pi pi-life-ring',
      items: [
        {
          label: 'Add Support',
          icon: 'pi pi-plus-circle',
          routerLink: ['/app/add-support'],
          routerLinkActive: 'active'
        },
        {
          label: 'Support List',
          icon: 'pi pi-list',
          routerLink: ['/lists/support-list'],
          routerLinkActive: 'active'
        }
      ]
    },
    {
            label: 'Quotations',
            icon: 'pi pi-file',
            items: [
              {
                label: 'Add Quotation',
                icon: 'pi pi-plus-circle',
                routerLink: ['/app/create-quotation'],
                routerLinkActive: 'active'
              },
              {
                label: 'Quotations List',
                icon: 'pi pi-list',
                routerLink: ['/lists/quotations-list'],
                routerLinkActive: 'active'
              }
            ]
            
          },
  ];
}
//   items: MenuItem[] = [
//     {
//       label: 'Home',
//       icon: 'pi pi-home',
//       routerLink: ['/'],
//       routerLinkActive: 'active'  // Added this to highlight when active
//     },
//     {
//       label: 'Customer',
//       icon: 'pi pi-users',
//       routerLink: ['/app/add-customer'],
//       routerLinkActive: 'active',  // Added this to highlight when active
//       routerLinkActiveOptions: { exact: true }
//     },
//     {
//       label: 'Assessments',
//       icon: 'pi pi-briefcase',
//       items: [
//         {
//           label: 'New Assessment',
//           icon: 'pi pi-plus-circle',
//           routerLink: ['/app/create-quotation'],
//           routerLinkActive: 'active'  // Added this to highlight when active
//         },
//         {
//           label: 'View Assessments',
//           icon: 'pi pi-eye',
//           routerLink: ['/lists/quotations-list'],
//           routerLinkActive: 'active'  // Added this to highlight when active
//         }
//       ]
//     },
//     {
//       label: 'Jobs',
//       icon: 'pi pi-briefcase',
//       items: [
//         {
//           label: 'New Job',
//           icon: 'pi pi-plus',
//           routerLink: ['/app/add-job'],
//           routerLinkActive: 'active'  // Added this to highlight when active
//         },
//         {
//           label: 'Job List',
//           icon: 'pi pi-list',
//           routerLink: ['/lists/job-list'],
//           routerLinkActive: 'active'  // Added this to highlight when active
//         }
//       ]
//     },
//     {
//       label: 'Quotations',
//       icon: 'pi pi-file',
//       routerLink: ['/app/quotations'],
//       routerLinkActive: 'active'  // Added this to highlight when active
//     },
//     {
//       label: 'Products',
//       icon: 'pi pi-tags',
//       routerLink: ['/app/products'],
//       routerLinkActive: 'active'  // Added this to highlight when active
//     },
//     {
//       label: 'Support',
//       icon: 'pi pi-life-ring',
//       routerLink: ['/app/support'],
//       routerLinkActive: 'active'  // Added this to highlight when active
//     }
//   ];
// }
