import { Routes } from '@angular/router';

import { LoginComponent } from './componentes/login/login.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HomeComponent } from './componentes/home/home.component';
import { AdoptaComponent } from './componentes/adopta/adopta.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'adopta', component: AdoptaComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '**', redirectTo: 'home' }
  ];