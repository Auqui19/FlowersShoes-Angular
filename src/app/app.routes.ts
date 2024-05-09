import { Routes } from '@angular/router';

import { ListadoComponent } from './color/listado/listado.component';
export const routes: Routes = [
	{ path: 'color', redirectTo: 'color/listado', pathMatch: 'full'},
  	{ path: 'color/listado', component: ListadoComponent },
  
  ];