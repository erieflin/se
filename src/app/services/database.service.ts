import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/Rx';

@Injectable()

export class DatabaseService{

  private handleError;

  constructor(private http:Http) {

    console.log('DatabaseService.constructor');
  }

  getResponse(httpAddress:string) {
    console.log('DatabaseService.getResponse');
    return this.http.get(httpAddress).map(res => {return res}).catch(this.handleError);
  }

  getMarkers() {
    console.log('DatabaseService.getMarkers');
    var markers = "";
    return markers;
  }

  addMarker(newMarker) {
    console.log('DatabaseService.addMarker');
  }

  updateMarker(marker, newLat, newLng) {
    console.log('DatabaseService.updateMarker');
  }

  removeMarker(marker) {
    console.log('DatabaseService.removeMarker');
  }
}
