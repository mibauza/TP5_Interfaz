import { Component } from '@angular/core';
import { CarruselComponent } from "../carrusel/carrusel.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarruselComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  elementos = [
    { img: '../../assets/animales/home1.jpg', texto: 'Primer elemento' },
    { img: '../../assets/animales/home2.jpg', texto: 'Segundo elemento' },
    { img: '../../assets/animales/home3.jpg', texto: 'Tercer elemento' }
  ];
}
