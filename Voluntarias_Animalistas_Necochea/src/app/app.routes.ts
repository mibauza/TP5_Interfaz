import { Routes } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';


export const routes: Routes = [
    { path: '', component: PrincipalComponent },
    { path: 'inicio', component: PrincipalComponent },
    { path: 'nosotros', component: NosotrosComponent },
  ];