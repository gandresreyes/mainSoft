import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaComponent } from './mapa/mapa.component';
import { HistorialComponent } from './historial/historial.component';

const routes: Routes = [

  {path:'',component:MapaComponent, title:'Mapa-MainSoft'},
  {path:'historial',component:HistorialComponent, title:'historial-MainSoft'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
