import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaVentaComponent } from './nueva-venta/nueva-venta.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class VentasModule { }
