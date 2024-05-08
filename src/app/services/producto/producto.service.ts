import { Injectable } from '@angular/core';
import { Producto } from '../../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private vectorProductos: Producto[] = [
    { id: 1, nombre: "Coca Cola 1.5", precio: 6000, stock: 200, Proveedor: "CocaCola", seleccionado: false},
    { id: 2, nombre: "Pasteles de arequipe", precio: 1800, stock: 40, Proveedor: "PandaPan", seleccionado: false },
    { id: 3, nombre: "Golosia", precio: 2200, stock: 50, Proveedor: "Mama Inés", seleccionado: false },
    { id: 4, nombre: "Quesito 500g", precio: 9500, stock: 15, Proveedor: "Colanta", seleccionado: false },
    { id: 5, nombre: "Bolsa de leche 900 ml", precio: 4000, stock: 15, Proveedor: "Colanta", seleccionado: false }
  ];

  constructor() { }

  obtenerProductos(): Producto[] {
    return this.vectorProductos;
  }

  agregarProducto(producto: Producto): void {
    this.vectorProductos.push(producto);
  }
}
