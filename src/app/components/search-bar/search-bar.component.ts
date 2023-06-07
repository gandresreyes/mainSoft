import { Component, EventEmitter, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { ClimaServiceService } from '../../services/clima-service.service';
import { MapService } from '../../services/map.service';
import { PlacesService } from '../../services/places.service';

declare var window: any

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  debuncer: Subject<string> = new Subject();
  resultSearch: any = [];
  resulClima: any = [];
  bsOffcanvas:any;
  favList:any=[];
  open:boolean=false;

  constructor(private climaServiceService: ClimaServiceService , private mapService:MapService , private placesService:PlacesService) { }

  ngOnInit() {
    this.placesService.getFav().subscribe({
      next: (resp) => {
        this.favList = resp        
      },
      error: () => {
        this.favList = []
      }
    });
    this.debuncer
      .pipe(debounceTime(300))
      .subscribe(valor => {
        if(valor !=""){
          this.climaServiceService.colsultaCity(valor).subscribe({
            next: (data: any) => {
              this.resultSearch = data;
            },
            error: () => {
              this.resultSearch=[]
            }
          }) 
        }else{
          this.resultSearch=[]
        }
           
      })
  }
  teclaPrecionada(term: string) {       
    this.debuncer.next(term)  
  }
  openClose(){
    if(this.open){
      this.open=false;
    }else this.open=true;
  }

  buscar(place:string ,country:string) {
    
    this.climaServiceService.colsultaClima(place , country).subscribe({
      next: (data: any) => {
        this.bsOffcanvas =  new window.bootstrap.Offcanvas('#offcanvasScrolling'); 
        this.resulClima = data;
        this.mapService.flyTo(this.resulClima  )       
        if(this.favList.find((element:any) => (element.name == place ) &&  (element.country == country))){
          this.resulClima.fav = true
        }

        this.resultSearch = [];  
        this.bsOffcanvas.show();  
        this.open = true 
      },
      error: () => {
        this.resulClima = []
      }     

    })

  }

  async addFav(ciudad:any){    
    const filter = this.favList.find((element:any) => (element.name == ciudad.name ) &&  (element.country == ciudad.sys.country));
   if(filter){
    return 
   }   
    const data = {name: ciudad.name , country :ciudad.sys.country }
    await this.placesService.addFav(data) 
    
  }
  delete(item:any){
    console.log(item)
    this.placesService.deleteFav(item)
  }

}
