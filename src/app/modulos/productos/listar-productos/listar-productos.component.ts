import { Component, ElementRef, ViewChild } from '@angular/core';
import { Producto } from '../../../models/producto';
import { Modal } from 'bootstrap';
import Swal from 'sweetalert2';
import { ProductoService } from '../../../services/producto/producto.service'; // Asegúrate de importar correctamente el servicio


@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})
export class ListarProductosComponent {
  @ViewChild('modalProducto') modal: ElementRef | undefined;

  vectorProductos: Producto[] = [
    { id: 1, nombre: "Coca Cola 1.5", precio: 6000, stock: 200, Proveedor: "CocaCola", seleccionado: false},
    { id: 2, nombre: "Pasteles de arequipe", precio: 1800, stock: 40, Proveedor: "PandaPan", seleccionado: false },
    { id: 3, nombre: "Golosia", precio: 2200, stock: 50, Proveedor: "Mama Inés", seleccionado: false },
    { id: 4, nombre: "Quesito 500g", precio: 9500, stock: 15, Proveedor: "Colanta", seleccionado: false },
    { id: 5, nombre: "Bolsa de leche 900 ml", precio: 4000, stock: 15, Proveedor: "Colanta", seleccionado: false }
  ];

  productoSeleccion: Producto | undefined = undefined;
  isNew: boolean = false;

  constructor(private productoService: ProductoService) { }

  EditarProducto(producto: Producto) {
    this.isNew = false;
    this.productoSeleccion = producto;
    // Abre el modal
    let bsModal = new Modal(this.modal?.nativeElement);
    bsModal.show();
  }

  NuevoProducto() {
    this.isNew = true;
    let maxId = Math.max(...this.vectorProductos.map(prod => prod.id));
    this.productoSeleccion = { id: maxId + 1, nombre: "", precio: 0, stock: 0, Proveedor: "", seleccionado: false };
  }

  GuardarProducto() {
    if (this.isNew) {
      // Guarda el nuevo producto
      this.vectorProductos.push(this.productoSeleccion!);
    } else {
      // Actualiza el producto existente
      const index = this.vectorProductos.findIndex(prod => prod.id === this.productoSeleccion!.id);
      if (index !== -1) {
        this.vectorProductos[index] = this.productoSeleccion!;
      }
    }
    // Limpia la selección y cierra el modal
    this.productoSeleccion = undefined;
    this.cerrarModal(this.modal);
    // Guarda los productos en el almacenamiento local
    localStorage.setItem('productos', JSON.stringify(this.vectorProductos));
    Swal.fire({
      title: 'Cambios guardados correctamente',
      icon: 'success'
    })
  }

  // Llama a este método en el constructor para cargar los productos del almacenamiento local
  cargarProductos() {
    const productosGuardados = localStorage.getItem('productos');
    if (productosGuardados) {
      this.vectorProductos = JSON.parse(productosGuardados);
    }
  }



  EliminarProducto(prod: Producto) {
    Swal.fire(
      {
        icon: 'question',
        title: `¿Estas seguro de eliminar el producto '${prod.nombre}'?`,
        showCancelButton: true,
        showConfirmButton: true,
        cancelButtonText: 'No, conservar',
        confirmButtonText: 'Si, eliminar',
        allowOutsideClick: false,
        buttonsStyling: false,
        reverseButtons: true,

        customClass: {
          cancelButton: 'btn btn-secondary me-2',
          confirmButton: 'btn btn-danger'
        }
      }
    )
      .then(rs => {
        if (rs.isConfirmed) {
          //Llamada API Delete
          const index = this.vectorProductos.indexOf(prod);
          if (index > -1) {
            this.vectorProductos.splice(index, 1);
          }

          Swal.fire({
            title: 'Producto eliminado correctamente',
            icon: 'success'
          })
        }
      });
  }


  cerrarModal(modal: ElementRef | undefined) {
    if (modal) {
      let bsModal = Modal.getInstance(modal?.nativeElement)
      bsModal?.hide();

      let backdrop = document.querySelector(".modal-backdrop.fade.show")
      if (backdrop) {
        backdrop.parentNode?.removeChild(backdrop);
      }
      document.body.removeAttribute('style');
      document.body.removeAttribute('class');
    }
  }
}
