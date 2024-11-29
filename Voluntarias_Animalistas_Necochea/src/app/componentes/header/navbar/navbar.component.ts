import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  constructor(public authService: AuthService, private router: Router) {}
  
  isMenuActive: boolean = false;

  toggleMenu(): void {
    this.isMenuActive = !this.isMenuActive;
  }

  // Método para manejar la navegación al hacer clic en "Adopta"
  goToAdopta() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/adopta']);  // Redirige a la página de "Adopta" si está logueado
    } else {
      this.router.navigate(['/login']);   // Redirige al login si no está autenticado
    }
  }

  // Método para redirigir al login
  goToLogin() {
    this.router.navigate(['/login']);   // Redirige a la página de login
  }
}




