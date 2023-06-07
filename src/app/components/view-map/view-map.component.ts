import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';
import {Map, Popup, Marker, LngLatBounds} from 'mapbox-gl';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-view-map',
  templateUrl: './view-map.component.html',
  styleUrls: ['./view-map.component.css']
})
export class ViewMapComponent implements  AfterViewInit  {
  
  @ViewChild('mapDiv') mapDiv!:ElementRef;
  private markers:Marker[] = [] ;

  constructor(private placesService:PlacesService, private mapserv:MapService){}

 
  ngAfterViewInit(): void {
    if(!this.placesService.userLocation) throw Error('No se pudo geolocalizar')
    
    const map = new Map({
      container: this.mapDiv.nativeElement, 
      style: 'mapbox://styles/mapbox/streets-v12', 
      center:  this.placesService.userLocation, 
      zoom: 9, 
      });

      const popup = new Popup() 
        .setHTML(`
          <h6>Aqui estoy </h6>
          <span>Estoy en este lugar del mundo</span>
        `);
      new Marker({color:'red'})
        .setLngLat(this.placesService.userLocation)
        .setPopup(popup)
        .addTo(map)
      this.mapserv.setMap(map)
  }



}
