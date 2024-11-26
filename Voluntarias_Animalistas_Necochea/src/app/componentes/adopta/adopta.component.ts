import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiAnimalesService } from '../../services/api-animales.service';
import { HttpClientModule } from '@angular/common/http';
import { Animal } from '../../modelo/animal'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adopta',
  standalone: true,
  imports: [NgFor, HttpClientModule],
  templateUrl: './adopta.component.html',
  styleUrls: ['./adopta.component.css'], // Corrección de "styleUrls"
  providers: [ApiAnimalesService],
})
export class AdoptaComponent implements OnInit {
  
  elementos: Animal[] = [];
  
  constructor(private apiAnimales: ApiAnimalesService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.apiAnimales.getAll().subscribe(
      (data: any) => {
        if (Array.isArray(data)) {
          this.elementos = data;
        } else if (data.data && Array.isArray(data.data)) {
          this.elementos = data.data;
        } else {
          console.error('Datos no son un array:', data);
        }
      },
      (error) => {
        console.error('Error al cargar los datos:', error);
      }
    );
  }
  
}

