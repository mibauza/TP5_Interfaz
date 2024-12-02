  import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
  import { ApiAnimalesService } from '../../services/api-animales.service';
  import { ActivatedRoute, Route, Router } from '@angular/router';  // Importar ActivatedRoute
  import { Animal } from '../../modelo/animal';
  import { NgFor, NgIf } from '@angular/common';
  import { HttpClientModule } from '@angular/common/http';
  import { Subscription } from 'rxjs';
  import { AuthService } from '../../services/auth.service';

  @Component({
    selector: 'app-adopta',
    standalone: true,
    imports: [HttpClientModule, NgFor, NgIf],
    templateUrl: './adopta.component.html',
    styleUrls: ['./adopta.component.css'],
    providers: [ApiAnimalesService, AuthService],
  })
  export class AdoptaComponent implements OnInit {
    
    isLoggedIn?: boolean;
    elementos: Animal[] = [];
    elementosLimitados: any[] = [];
    private routeSub?: Subscription;
    private authSub?: Subscription;
    
    constructor(private apiAnimales: ApiAnimalesService, 
      private route: ActivatedRoute,
      private authService: AuthService, 
      private router: Router,
      private cdr: ChangeDetectorRef) {

    }

    ngOnInit(): void {
      // Suscríbete al observable que emite el estado de autenticación
      this.authSub = this.authService.isLoggedIn$.subscribe(isLoggedIn => {
        this.isLoggedIn = isLoggedIn;  // Asignamos el valor a isLoggedIn
        console.log('Estado de autenticación: ', this.isLoggedIn); // Verificar en consola
      });
  
      // Cargar los elementos
      this.loadItems();
    }
    
  ngOnDestroy(): void {
      // Cancelar la suscripción cuando el componente sea destruido para evitar fugas de memoria
      if (this.routeSub) {
        this.routeSub.unsubscribe();
      }
    }
    loadItems(): void {
      console.log("adopta " + this.isLoggedIn )
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
          this.cdr.detectChanges();
        },
        (error) => {
          console.error('Error al cargar los datos:', error);
        }
      );
    }

    // Método para manejar la navegación al hacer clic en "Adopta"
    goToLoggin() {
      
        this.router.navigate(['/login']);   // Redirige al login si no está autenticado
      
    }
  }
