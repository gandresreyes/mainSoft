import { Injectable } from '@angular/core';
import {Map, LngLatLike, Popup, Marker} from 'mapbox-gl';


@Injectable({
  providedIn: 'root'
})
export class MapService {
  

  private map?:Map;
  get isMapReady(){
    return !!this.map;
  }

  setMap(map:Map){
    this.map = map;
  }

  flyTo(result:any){
    if(!this.isMapReady) throw new Error('El mapa no esta inicializado')
    const popup = new Popup() 
    .setHTML(`
      <h6>${result.name} </h6>
      <span>Estoy en este lugar del mundo</span>
    `);
    new Marker({color:'red'})
      .setLngLat(result.coord)
      .setPopup(popup)
      .addTo(this.map!)

     this.map?.flyTo({
      zoom:8,
      center:result.coord
     }); 

  }




}
