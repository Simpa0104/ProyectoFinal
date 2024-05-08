import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  passwordVisible: boolean = false;

  constructor() { }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  usr = "Steven.restrepo";
  pwd = "Simpa0104";

  LoginFake() {
    let inputUser = (<HTMLInputElement>document.getElementById('urs')).value;
    let inputPassword = (<HTMLInputElement>document.getElementById('pwd')).value;

    if (inputUser === this.usr && inputPassword === this.pwd) {
      Swal.fire({
        title: '¡Bienvenido!',
        text: 'Has iniciado sesión correctamente.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          location.href = "/";
        }
      })
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Usuario o contraseña incorrectos.',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
  }
}
