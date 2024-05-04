import { Component, ElementRef, ViewChild } from '@angular/core';
import { Proveedor } from '../../../models/proveedores';
import { Modal } from 'bootstrap';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css'
})
export class ProveedoresComponent {
  @ViewChild('modalProveedor') modal: ElementRef | undefined;

  vectorProveedores: Proveedor[] = [
    { id: 1, nombre: "Coca-Cola", fechaRegistro: new Date() },
    { id: 2, nombre: "Nestle", fechaRegistro: new Date() }
  ];

  proveedorSeleccion: Proveedor | undefined = undefined;
  isNew: boolean = false;

  EditarProveedor(proveedor: Proveedor) {
    this.isNew = false;
    this.proveedorSeleccion = proveedor;
  }

  NuevoProveedor() {
    this.isNew = true;
    this.proveedorSeleccion = { id: 0, fechaRegistro: new Date(), nombre: "" };
  }

  GuardarProveedor() {
    if (this.isNew) {
      this.vectorProveedores.push(this.proveedorSeleccion!); //Equivalenta a llamar API para guardar  -en la base de datos por POST
      this.proveedorSeleccion = undefined;
      this.cerrarModal(this.modal)
    } else {
      //Llamada a la API para actualizar por PUT
      this.proveedorSeleccion = undefined;
      this.cerrarModal(this.modal)
    }
    Swal.fire({
      title: 'Cambios guardados correctamente',
      icon: 'success'
    })
  }


  EliminarProveedor(prov: Proveedor) {
    Swal.fire(
      {
        icon: 'question',
        title: `¿Estas seguro de eliminar el proveedor '${prov.nombre}'?`,
        showCancelButton: true,
        showConfirmButton: true,
        cancelButtonText: 'No, conservar',
        confirmButtonText: 'Si, eliminar',
        allowOutsideClick: false,
        buttonsStyling: false,
        reverseButtons: true,

        customClass: {
          cancelButton: 'btn btn-secondary me-2 #000000',
          confirmButton: 'btn btn-danger'
        }
      }
    )
      .then(rs => {
        if (rs.isConfirmed) {
          //Llamada API Delete

          Swal.fire({
            title: 'Proveedor eliminado correctamente',
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
