import { Component } from '@angular/core';
import { CarruselComponent } from "../carrusel/carrusel.component";
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CarruselComponent, FooterComponent, NavbarComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
