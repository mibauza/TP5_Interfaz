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
    { img: '../../assets/animales/img1.jpeg', texto: 'Ley 14.346 de “Maltrato animal” y la Ley Nacional de Protección de Animales N° 2786, conocida como “Ley Sarmiento”. ¿Cómo denunciar?' },
    { img: '../../assets/animales/img2.jpeg', texto: 'Adoptá con Amor y Responsabilidad y siempre tendrás un corazón latiendo por ti, esperándote en casa.' },
    { img: '../../assets/animales/img3.jpeg', texto: 'En Argentina, se estima que más del 60% de las mascotas en los hogares son adoptadas.' }
  ];
}
