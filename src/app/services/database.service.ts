import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/Rx';

@Injectable()

export class DatabaseService {

  private databaseError;

  constructor(private http:Http) {
    console.log('DatabaseService.constructor');
  }

  getResponse(httpAddress:string) {
    console.log('DatabaseService.getResponse');
    return this.http.get(httpAddress).map(res => {return res}).catch(this.databaseError);
  }

  addMarker(newMarker) {
    console.log('DatabaseService.addMarker');
    var markers = JSON.parse(localStorage.getItem('markers'));
    markers.push(newMarker);
    localStorage.setItem('markers', JSON.stringify(markers));
  }

  updateMarker(marker, newLat, newLng) {
    console.log('DatabaseService.updateMarker');
    var markers = JSON.parse(localStorage.getItem('markers'));
    for(var i =0; i < markers.length; i++) {
      if(marker.lat == markers[i].lat && marker.lng == markers[i].lng) {
        markers[i].lat = newLat;
        markers[i].lng = newLng;
      }

      localStorage.setItem('markers', JSON.stringify(markers));
    }
  }

  removeMarker(marker) {
    console.log('DatabaseService.removeMarker');
    var markers = JSON.parse(localStorage.getItem('markers'));
    for(var i =0; i < markers.length; i++) {
      if(marker.lat == markers[i].lat && marker.lng == markers[i].lng) {
        markers.splice(i, 1);
      }

      localStorage.setItem('markers', JSON.stringify(markers));
    }
  }
}
