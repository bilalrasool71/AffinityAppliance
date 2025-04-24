import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent),
    },
    {
        path: 'app',
        loadComponent: () => import('./view-outlet/view-outlet.component').then(m => m.ViewOutletComponent),
        children:[
            {
                path: 'create-quotation',
                loadComponent: () => import('./components/create-quotation/create-quotation.component').then(m => m.CreateQuotationComponent),
            },
            {
                path: 'add-user',
                loadComponent: () => import('./components/add-user/add-user.component').then(m => m.AddUserComponent),
            },
            {
                path: 'add-support',
                loadComponent: () => import('./components/support-form/support-form.component').then(m => m.SupportFormComponent),
            },
            {
                path: 'add-company',
                loadComponent: () => import('./components/add-company/add-company.component').then(m => m.AddCompanyComponent),
            },
            {
                path: 'add-customer',
                loadComponent: () => import('./components/add-customer/add-customer.component').then(m => m.AddCustomerComponent),
            },
            {
                path: 'add-reseller',
                loadComponent: () => import('./components/reseller-form/reseller-form.component').then(m => m.ResellerFormComponent),
            },
            {
                path: 'add-contact',
                loadComponent: () => import('./components/contact-form/contact-form.component').then(m => m.ContactFormComponent),
            },
        ]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
