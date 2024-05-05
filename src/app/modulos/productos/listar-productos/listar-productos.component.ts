import { Component, ElementRef, ViewChild } from '@angular/core';
import { Producto } from '../../../models/producto';
import { Modal } from 'bootstrap';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})
export class ListarProductosComponent {
  @ViewChild('modalProducto') modal: ElementRef | undefined;

  vectorProductos: Producto[] = [
    {id: 1, nombre: "Coca Cola 1.5", precio: 0, fechaRegistro: new Date(), stock: 0, Proveedor: "CocaCola"},
    {id: 2, nombre: "Pasteles de arequipe", precio: 0, fechaRegistro: new Date(), stock: 0, Proveedor: "PandaPan"}
  ];

  productoSeleccion: Producto | undefined = undefined;
  isNew: boolean = false;

  EditarProducto(producto: Producto) {
    this.isNew = false;
    this.productoSeleccion = producto;
  }

  NuevoProducto() {
    this.isNew = true;
    this.productoSeleccion = { id: 0, nombre: "", precio: 0, fechaRegistro: new Date(), stock: 0, Proveedor: ""};
  }


  GuardarProducto() {
    if (this.isNew) {
      this.vectorProductos.push(this.productoSeleccion!); //Equivalenta a llamar API para guardar  -en la base de datos por POST
      this.productoSeleccion = undefined;
      this.cerrarModal(this.modal)
    } else {
      //Llamada a la API para actualizar por PUT
      this.productoSeleccion = undefined;
      this.cerrarModal(this.modal)
    }
    Swal.fire({
      title: 'Cambios guardados correctamente',
      icon: 'success'
    })
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
