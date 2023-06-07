import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../services/places.service';
import { ClimaServiceService } from '../services/clima-service.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  favList:any=[];
  history:any=[];

  constructor( private placesService:PlacesService , private climaServiceService:ClimaServiceService) { }

  ngOnInit() {
    this.placesService.getFav().subscribe({
      next: (resp) => {
        this.favList = resp   
      },
      error: () => {
        this.favList = []
      }
    });
  } 

  verInfo(place:any){    
    this.climaServiceService.cosultaHistory(place).subscribe({
      next: (resp) => {
          this.history = resp
          
      },
      error: () => {
        this.history = []
      }
    });
    
  }
 

}
