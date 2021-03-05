import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

export const Approutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/component', pathMatch: 'full' },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
