import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // 👈 Importar CommonModule

@Component({
  selector: 'app-ejercicio-05',
  standalone: true,  // 👈 Si usas Angular Standalone Components
  imports: [CommonModule],  // 👈 Agregar CommonModule
  templateUrl: './ejercicio-05.component.html',
  styleUrls: ['./ejercicio-05.component.css']
})
export class Ejercicio05Component {
  operatingSystems = [
    { id: 'win', name: 'Windows' },
    { id: 'osx', name: 'MacOs' },
    { id: 'linux', name: 'Linux' }
  ];

  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' }
  ];

  trackById(index: number, item: any): number {
    return item.id;
  }
}