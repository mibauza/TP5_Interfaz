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
      image: 'https://via.placeholder.com/800x400?text=Slide+1',
      title: 'Slide 1',
      text: 'This is the first slide.',
    },
    {
      image: 'https://via.placeholder.com/800x400?text=Slide+2',
      title: 'Slide 2',
      text: 'This is the second slide.',
    },
    {
      image: 'https://via.placeholder.com/800x400?text=Slide+3',
      title: 'Slide 3',
      text: 'This is the third slide.',
    },
  ];

}
