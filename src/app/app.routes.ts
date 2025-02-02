import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
  { path: 'chat', loadComponent: () => import('./chatwidget/chatwidget.component').then(c => c.ChatwidgetComponent) },
  { path: '**', redirectTo: 'chat', pathMatch: 'full' },
];
