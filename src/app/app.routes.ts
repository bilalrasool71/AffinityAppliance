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
            }
        ]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
