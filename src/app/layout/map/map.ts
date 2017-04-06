import { Component } from '@angular/core';
import {DatabaseService} from '../../services/database.service';

@Component({
  selector: 'map',
  templateUrl: './map.html',
  styleUrls: ['./map.css'],
  providers: [DatabaseService]
})

export class MapComponent {

  zoom: number = 13;
  lat: number = 34.024212;
  lng: number = -118.496475;
  markerName:string;
  markerLat:string;
  markerLng:string;
  markerDraggable:string;

  markers: marker[];

  constructor(private databaseService:DatabaseService) {
    this.markers = this.databaseService.getMarkers();
  }

  clickedMarker(marker:marker, index:number) {
    console.log('Clicked Marker: ' + marker.name + ' at index ' + index);
  }

  mapClicked($event:any) {

    console.log('Map Clicked')
    var newMarker = {
    name: 'Untitled',
    lat: $event.coords.lat,
    lng: $event.coords.lng,
    draggable:false
  }

  this.markers.push(newMarker);
  }

  markerDragEnd(marker:any, $event:any) {
    console.log('dragEnd', marker, $event);

    var updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable:false
    }

    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;

    this.databaseService.updateMarker(updMarker, newLat, newLng);
  }

    addMarker() {
      console.log("Adding Marker");

      if (this.markerDraggable == 'yes') {
        var isDraggable = true;

      } else {
        var isDraggable = false;
      }

      var marker = {
        name:this.markerName,
        lat: parseFloat(this.markerLat),
        lng: parseFloat(this.markerLng),
        draggable:isDraggable
      }

      this.markers.push(marker);
      this.databaseService.addMarker(marker);
    }

    removeMarker(marker) {
      console.log('Removing Marker...');
      for(var i = 0; i < this.markers.length; i++) {
        if (marker.lat == this.markers[i].lat && marker.lng == this.markers[i].lng) {
          this.markers.splice(i, 1);
        }
      }

      this.databaseService.removeMarker(marker);
    }
}

// Marker Type
interface marker {
  name:string;
  lat:number;
  lng:number;
  draggable:boolean;
}
