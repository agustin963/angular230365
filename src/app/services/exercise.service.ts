import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private exerciseSubject = new BehaviorSubject<string>(''); // Estado inicial vacío
  exerciseSelected$ = this.exerciseSubject.asObservable();

  selectExercise(exercise: string) {
    this.exerciseSubject.next(exercise);
  }
}
