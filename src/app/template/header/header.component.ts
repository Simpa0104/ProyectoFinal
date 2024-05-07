import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  showNavbar: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Verifica si la ruta actual es la de login
    this.router.events.subscribe(event => {
      if (this.router.url === '/login') {
        this.showNavbar = false; // Oculta la barra de navegación en la página de login
      } else {
        this.showNavbar = true; // Muestra la barra de navegación en otras páginas
      }
    });
  }
}
