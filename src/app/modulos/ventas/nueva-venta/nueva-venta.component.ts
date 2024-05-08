import { Component } from '@angular/core';
import { ProductoService } from '../../../services/producto/producto.service';

@Component({
  selector: 'app-nueva-venta',
  templateUrl: './nueva-venta.component.html',
  styleUrls: ['./nueva-venta.component.css']
})
export class NuevaVentaComponent {
  total: number = 0;

  constructor(private productoService: ProductoService) { }

  calcularTotal() {
    this.total = this.productoService.obtenerProductos()
      .filter(prod => prod.seleccionado)
      .reduce((acc, prod) => acc + prod.precio, 0);
  }

  get productos() {
    return this.productoService.obtenerProductos();
  }
}
