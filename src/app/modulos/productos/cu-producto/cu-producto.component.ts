import { Component, Input } from '@angular/core';
import { Producto } from '../../../models/producto';
import { format } from 'date-fns-tz';

@Component({
  selector: 'app-cu-producto',
  templateUrl: './cu-producto.component.html',
  styleUrl: './cu-producto.component.css'
})
export class CuProductoComponent {
  @Input() producto: Producto | undefined;
}