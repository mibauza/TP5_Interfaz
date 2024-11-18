import { Component } from '@angular/core';
import { CarruselComponent } from "../carrusel/carrusel.component";
import { FooterComponent } from "../footer/footer.component";
import { ElementoComponent } from './elemento/elemento.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CarruselComponent, FooterComponent,ElementoComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
