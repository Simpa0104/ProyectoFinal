import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { RouterModule, Routes } from '@angular/router';
import { CuProductoComponent } from './cu-producto/cu-producto.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ListarProductosComponent
  }
]

@NgModule({
  declarations: [
    ListarProductosComponent,
    CuProductoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class ProductosModule { }
