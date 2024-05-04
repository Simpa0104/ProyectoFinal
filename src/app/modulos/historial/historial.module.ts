import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialComponent } from './historial/historial.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HistorialComponent
  }
]

@NgModule({
  declarations: [
    HistorialComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HistorialModule { }
