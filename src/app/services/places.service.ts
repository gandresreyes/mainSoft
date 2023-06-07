import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, updateDoc , deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService  {

  public userLocation:[number, number] | undefined;
  public placeEditMarket = []

  constructor(private firestore:Firestore ,private http:HttpClient) { 
    this.getUserLocation();
  }

  get isUserLocationReady():boolean{
    return !!this.userLocation;
  }  

  public async getUserLocation():Promise<[number,number]>{
    return new Promise((resolve , reject)=>{
      navigator.geolocation.getCurrentPosition(
        ({coords})=>{          
          this.userLocation = [coords.longitude , coords.latitude];
          resolve(this.userLocation);
        },
        (err)=>{
          alert("No se pudo obtener la geolocalizacion ")
          console.log(err)
          reject
        }       
      );
    })
  }

  addFav(place:any){
    const favRef = collection(this.firestore , 'favoritos');
    return addDoc(favRef , place )     
  }  

  getFav(){
    const placeRef = collection(this.firestore , 'favoritos');
    return collectionData(placeRef, {idField: 'id'}) as Observable<any>
  }

  deleteFav(place:any){
    const placeRef = doc(this.firestore , `favoritos/${place.id}`);  
    return deleteDoc(placeRef)

  }


}
