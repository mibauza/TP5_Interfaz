import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./componentes/header/header.component";
import { CarruselComponent } from "./componentes/carrusel/carrusel.component";
import { PrincipalComponent } from './componentes/principal/principal.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PrincipalComponent,NosotrosComponent, CarruselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Voluntarias_Animalistas_Necochea';
}
