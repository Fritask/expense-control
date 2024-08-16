import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { GraphsComponent } from './pages/graphs/graphs.component';

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
        path: 'graphs',
        component: GraphsComponent,
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
        path: 'settings',
        component: SettingsComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
];
