import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { CategoriesComponent } from './pages/categories/categories.component';

export const routes: Routes = [
    {
        path: '',
        component: TransactionsComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'transactions',
        component: TransactionsComponent,
    },
    {
        path: 'categories',
        component: CategoriesComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
];
