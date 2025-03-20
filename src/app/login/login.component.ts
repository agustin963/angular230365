import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  login() {
    // Simula autenticación y redirige a la página principal
    localStorage.setItem('loggedIn', 'true'); // Guarda sesión
    this.router.navigate(['/home']); // Redirige a la página principal
  }
}
