import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, tap ,BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClimaServiceService {
  constructor(private http:HttpClient){}

  private apiUrl:string = environment.APICLIMA
  private key:string = environment.KEYCLIMA
  

  get httpParamas(){
    return  new HttpParams().set('appid',this.key).set('lang', "ES").set('units', 'metric')
  }
  
  colsultaClima(place:string , country:string){    
    const url = `${this.apiUrl}/data/2.5/weather?q=${place},${country}`;       
    return this.http.get(url,{params : this.httpParamas })    
  }

  get httpParamasvity(){
    return  new HttpParams().set('limit','3').set('appid',this.key)
  }

  colsultaCity(place:string){    
    const url = `${this.apiUrl}/geo/1.0/direct?q=${place}`;   
    return this.http.get(url,{params : this.httpParamasvity })
  }

  get httpParamashostory(){
    return  new HttpParams().set('appid',this.key).set('lang', "ES").set('units', 'metric')
  }

  cosultaHistory(place:any){       
    const url = `${this.apiUrl}/data/2.5/forecast?lat=${place.coord.lat}&lon=${place.coord.lon}`;
     return this.http.get(url,{params : this.httpParamashostory })
    
  }

}
