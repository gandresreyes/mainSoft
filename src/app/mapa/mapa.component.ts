import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Map, Popup, Marker, LngLatBounds} from 'mapbox-gl';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent   { 

  @ViewChild('mapDiv') mapDiv!:ElementRef

  constructor(private placesService:PlacesService){}
 

  get isUserLocationReady(){
    return this.placesService.isUserLocationReady;
  }

  

}
