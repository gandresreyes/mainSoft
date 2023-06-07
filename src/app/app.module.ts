import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule}from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HistorialComponent } from './historial/historial.component';
import { CargandoComponent } from './cargando/cargando.component';
import { MapaComponent } from './mapa/mapa.component';
import { ViewMapComponent } from './components/view-map/view-map.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { TimePipe } from './pipes/time.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HistorialComponent,
    CargandoComponent,
    MapaComponent,
    ViewMapComponent,
    SearchBarComponent,
    TimePipe,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
