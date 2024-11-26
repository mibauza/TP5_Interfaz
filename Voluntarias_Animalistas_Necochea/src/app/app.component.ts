import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./componentes/header/header.component";
import { HttpClientModule,  } from '@angular/common/http';
import { FooterComponent } from "./footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HttpClientModule,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Voluntarias_Animalistas_Necochea';
}
