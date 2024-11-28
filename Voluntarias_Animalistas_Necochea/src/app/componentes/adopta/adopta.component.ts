import { Component, OnInit } from '@angular/core';
import { ApiAnimalesService } from '../../services/api-animales.service';
import { ActivatedRoute, Route } from '@angular/router';  // Importar ActivatedRoute
import { Animal } from '../../modelo/animal';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-adopta',
  standalone: true,
  imports: [HttpClientModule, NgFor],
  templateUrl: './adopta.component.html',
  styleUrls: ['./adopta.component.css'],
  providers: [ApiAnimalesService],
})
export class AdoptaComponent implements OnInit {
  
  elementos: Animal[] = [];
  elementosLimitados: any[] = [];
  private routeSub?: Subscription;
  constructor(private apiAnimales: ApiAnimalesService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    // Cada vez que se navega a este componente, recargamos los elementos
    this.route.params.subscribe(() => {
      this.loadItems();
    });
  }
 ngOnDestroy(): void {
    // Cancelar la suscripción cuando el componente sea destruido para evitar fugas de memoria
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
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
        this.elementosLimitados = this.elementos.slice(0, 18);
      },
      (error) => {
        console.error('Error al cargar los datos:', error);
      }
    );
  }
}
