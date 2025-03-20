// page-container.component.ts
import { Component } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {  Input, Output, EventEmitter } from '@angular/core';
import { Ejercicio01Component } from '../../ejercicio-01/ejercicio-01.component';
import { Ejercicio02Component } from '../../ejercicio-02/ejercicio-02.component';
import { Ejercicio03Component } from '../../ejercicio-03/ejercicio-03.component';

@Component({
  selector: 'app-page-container',
  imports: [ContentComponent, SidebarComponent,CommonModule,RouterOutlet,Ejercicio01Component,Ejercicio02Component,Ejercicio03Component],
  
 
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css'],
})
export class PageContainerComponent {
  @Input() selectedExercise: string = '';
  
  

  isSidebarVisible: boolean = true;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }


}