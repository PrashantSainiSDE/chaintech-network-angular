import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/product-list', pathMatch: 'full' },
  {
    path: 'product-list',
    loadComponent: () =>
      import('./core/pages/product-list/product-list.component').then(
        (c) => c.ProductListComponent
      ),
    title: 'Product List',
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
