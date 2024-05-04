import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaVentaComponent } from './nueva-venta/nueva-venta.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NuevaVentaComponent
  }
]

@NgModule({
  declarations: [
    NuevaVentaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VentasModule { }
