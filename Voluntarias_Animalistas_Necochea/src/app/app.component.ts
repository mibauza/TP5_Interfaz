import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./componentes/header/header.component";
import { CarruselComponent } from "./componentes/carrusel/carrusel.component";
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { HomeComponent } from './componentes/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CarruselComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Voluntarias_Animalistas_Necochea';
}
