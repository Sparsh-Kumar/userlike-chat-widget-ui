import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
  { path: 'chat', loadComponent: () => import('./userlike/userlike.component').then((c) => c.UserlikeComponent) },
  { path: '**', redirectTo: 'chat', pathMatch: 'full' },
];

export default routes;
