import { Component } from '@angular/core';

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

  usr="EL Pepe";
  pwd="123";

  LoginFake(){
    location.href="/";
  }
}
