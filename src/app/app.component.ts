import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  showIndex: boolean = true;
  title = 'ProyectoFinal';

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Verifica si la ruta actual es la de login
    this.router.events.subscribe(event => {
      if (this.router.url === '/login' || this.router.url === '/venta' || this.router.url === '/productos' || this.router.url === '/historial' || this.router.url === '/proveedores') {
        this.showIndex = false; // Oculta la barra de navegación en la página de login
      } else {
        this.showIndex = true; // Muestra la barra de navegación en otras páginas
      }
    });
  }
}
