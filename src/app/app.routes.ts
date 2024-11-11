import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'books',
    loadComponent: () =>
      import('./pages/books-page/books-page.component').then(
        (c) => c.BooksPageComponent
      ),
  },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
];
