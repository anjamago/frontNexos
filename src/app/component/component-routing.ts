import { Routes } from '@angular/router';

import { AutoresComponent } from 'src/app/component/autores/autores.component';
import { EditorialesComponent } from 'src/app/component/editoriales/editoriales.component';
import { LibrosComponent } from 'src/app/component/libros/libros.component';

export const ComponentRouting: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'Autores', pathMatch: 'full' },
      {
        path: 'Autores',
        component: AutoresComponent,
      },
      {
        path: 'Editorial',
        component: EditorialesComponent,
      },
      {
        path: 'Libros',
        component: LibrosComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
