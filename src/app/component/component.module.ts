import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentRouting } from './component-routing';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { DxDataGridModule,
  DxBulletModule,
  DxTemplateModule } from 'devextreme-angular';

import { AutoresComponent } from './autores/autores.component';
import { LibrosComponent } from './libros/libros.component';
import { EditorialesComponent } from './editoriales/editoriales.component';



@NgModule({
  declarations: [ AutoresComponent, LibrosComponent, EditorialesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentRouting),
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule
  ]
})
export class ComponentModule { }
