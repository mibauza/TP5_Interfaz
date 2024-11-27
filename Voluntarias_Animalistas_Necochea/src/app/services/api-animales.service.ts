import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../modelo/animal';

@Injectable({
  providedIn: 'root'
})
export class ApiAnimalesService {
 
  URL:string = 'https://huachitos.cl/api/animales/tipo/perro';

    constructor(private http: HttpClient) { }
  
    // Obtener todos los datos
    getAll(): Observable<Animal[]> {
      return this.http.get<Animal[]>(this.URL);
    }
  
    // Obtener un dato específico
    getById(endpoint: string, id: number | string): Observable<Animal[]> {
      return this.http.get<Animal[]>(`${this.URL}/${endpoint}/${id}`);
    }
  
  }
  
