import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosModule } from './modulos/productos/productos.module';

const routes: Routes = [
  {
    path: 'venta',
    loadChildren: () => import('./modulos/ventas/ventas.module').then(m => m.VentasModule)
  },


  {
    path: 'productos',
    loadChildren: () => import('./modulos/productos/productos.module').then(m => m.ProductosModule)
  },

  {
    path: 'historial',
    loadChildren: () => import('./modulos/historial/historial.module').then(m => m.HistorialModule)
  },

  {
    path: 'proveedores',
    loadChildren: () => import('./modulos/proveedores/proveedores.module').then(m => m.ProveedoresModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
