import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ejercicio01Component } from '../../../ejercicio-01/ejercicio-01.component';
import { Ejercicio02Component } from '../../../ejercicio-02/ejercicio-02.component';
import { Ejercicio03Component } from '../../../ejercicio-03/ejercicio-03.component';
import { Ejercicio04Component } from '../../../ejercicio-04/ejercicio-04.component';
import { Ejercicio05Component } from '../../../ejercicio-05/ejercicio-05.component';
import { Ejercicio07Component } from '../../../ejercicio-07/ejercicio-07.component';
import { Ejercicio08Component } from '../../../ejercicio-08/ejercicio-08.component';
import { Ejercicio09Component } from '../../../ejercicio-09/ejercicio-09.component';
import { Ejercicio10Component } from '../../../ejercicio-10/ejercicio-10.component';
import { Ejercicio06Component } from "../../../ejercicio-06/ejercicio-06.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    Ejercicio01Component,
    Ejercicio02Component,
    Ejercicio03Component,
    Ejercicio04Component,
    Ejercicio05Component,
    Ejercicio07Component,
    Ejercicio08Component,
    Ejercicio09Component,
    Ejercicio10Component,
    Ejercicio06Component
],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input() exerciseName: string = '';
  @Input() isLoggedIn: boolean = true;
}

