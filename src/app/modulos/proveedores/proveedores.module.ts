import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { RouterModule, Routes } from '@angular/router';
import { CuProveedoresComponent } from './cu-proveedores/cu-proveedores.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ProveedoresComponent
  }
]

@NgModule({
  declarations: [
    ProveedoresComponent,
    CuProveedoresComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class ProveedoresModule { }
