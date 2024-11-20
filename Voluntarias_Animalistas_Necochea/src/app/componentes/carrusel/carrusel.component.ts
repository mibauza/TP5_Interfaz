import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
  slides = [
    {
      image: '../../assets/animales/amiguitos.jpeg',
      title: 'Slide 1',
      text: 'This is the first slide.',
    },
    {
      image: '../../assets/animales/perro1.jpg',
      title: 'Slide 2',
      text: 'This is the second slide.',
    },
    {
      image: '../../assets/animales/perro2.jpg',
      title: 'Slide 3',
      text: 'This is the third slide.',
    }
  ];

  currentIndex = 0;

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}