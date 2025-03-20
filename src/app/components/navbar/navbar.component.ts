import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ExerciseService } from '../../services/exercise.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() toggle = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();
  @Output() exerciseSelected = new EventEmitter<string>();

  isExpanded: boolean = false;
  exercises: string[] = [
    'Ejercicio 01', 'Ejercicio 02', 'Ejercicio 03', 'Ejercicio 04',
    'Ejercicio 05', 'Ejercicio 06', 'Ejercicio 07', 'Ejercicio 08',
    'Ejercicio 09', 'Ejercicio 10', 'Ejercicio 11', 'Ejercicio 12'
  ];
  
  constructor(private exerciseService: ExerciseService) {}

  toggleExpansion() {
    this.isExpanded = !this.isExpanded;
  }

  selectExercise(name: string) {
    this.exerciseService.selectExercise(name); // 🔥 Enviar ejercicio seleccionado al servicio
    this.isExpanded = false;
  }
  toggleSidebar() {
    this.toggle.emit();
  }

  onLogout() {
    this.logout.emit();
  }


}
