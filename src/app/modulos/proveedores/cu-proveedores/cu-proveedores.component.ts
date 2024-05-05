import { Component, Input } from '@angular/core';
import { Proveedor } from '../../../models/proveedores';
import { format } from 'date-fns-tz';

@Component({
  selector: 'app-cu-proveedores',
  templateUrl: './cu-proveedores.component.html',
  styleUrl: './cu-proveedores.component.css'
})
export class CuProveedoresComponent {
  @Input() proveedor: Proveedor | undefined;

  formatDateTimeLocal(fecha: Date) {
    let formateada = format(fecha, "yyyy-MM-dd'T'HH:mm", { timeZone: "America/Bogota" });
    return formateada;
  }

  updateDate(valor: string) {
    this.proveedor!.fechaVisita = new Date(valor);
  }
}

