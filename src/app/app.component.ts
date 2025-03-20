import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { ExerciseService } from './services/exercise.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,PageContainerComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Workout Tracker';
  selectedExercise: string = '';
  isLoggedIn: boolean = true;

  onToggleSidebar() {
    // Lógica para mostrar/ocultar el sidebar
  }

  onLogout() {
    this.isLoggedIn = false;
    // Lógica adicional para el logout
  }

  onExerciseSelected(exercise: string) {
    this.selectedExercise = exercise;
  }

  onLogin() {
    this.isLoggedIn = true;
    // Lógica adicional para el login
  }
}