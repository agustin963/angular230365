import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 Importar CommonModule

@Component({
  selector: 'app-ejercicio-04',
  standalone: true,  // Si usas Angular Standalone Components
  imports: [CommonModule], // 👈 Agregar CommonModule
  templateUrl: './ejercicio-04.component.html',
  styleUrls: ['./ejercicio-04.component.css'] // 👈 styleUrls con "s"
})
export class Ejercicio04Component {
  isLoggedIn = false;
  isServerRunning = true; // 👈 Corregido el nombre de la variable
}
