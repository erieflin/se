import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/Rx';

import {Handler} from '../database/handler';

@Injectable()

export class DatabaseService extends Handler {

  private handleError;

  constructor(private http:Http) {
    super();
    console.log('DatabaseService.constructor');
    //this.load();
    this.getMarkers();
  }

  getResponse(httpAddress:string) {
    console.log('DatabaseService.getResponse');
    return this.http.get(httpAddress).map(res => {return res}).catch(this.handleError);
  }

  getMarkers() {
    console.log('DatabaseService.getMarkers');
    //var markers = JSON.parse(localStorage.getItem('markers'));

    var markers = [
      {
        name: 'Home 1 $somevalue1', lat: 34.014319, lng: -118.485495, draggable: true
      },
      {
        name: 'Home 2 $somevalue2', lat: 34.025212, lng: -118.496585, draggable: true
      },
      {
        name: 'Home 3 $somevalue3', lat: 34.036105, lng: -118.492770, draggable: true
      }
    ]
    
    return markers;
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
