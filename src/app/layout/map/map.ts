import { Component } from '@angular/core';
import {DatabaseService} from '../../services/database.service';

@Component({
  selector: 'map',
  templateUrl: './map.html',
  styleUrls: ['./map.css'],
  providers: [DatabaseService]
})

export class MapComponent {

response:any;

httpAddress = 'http://rebekahestey.com/cv64/se/database/getHomes.php';
imagesPath = 'http://rebekahestey.com/cv64/se/homes/';

  zoom: number = 13;
  lat: number = 34.024212;
  lng: number = -118.496475;
  markerName:string;
  markerLat:string;
  markerLng:string;
  markerDraggable:string;

  markers: marker[] = [];

  constructor(private databaseService:DatabaseService) {
    //this.markers = this.databaseService.getMarkers();

    console.log('MapComponent.constructor');

  this.databaseService.getResponse(this.httpAddress).subscribe(value => {
       this.response = value;
       console.log('app.component.ts');
       console.log('this.response.json(): ' + this.response.json());
       console.log('JSON.stringify(this.response.json()) ' + JSON.stringify(this.response.json()));

       var myJSON = JSON.stringify(this.response.json());
       console.log('myJSON: ' + myJSON);

       var databaseObject = JSON.parse(myJSON);
       console.log('JSON.parse(myJSON): ' + databaseObject);

       for(var i = 0; i < databaseObject.length; i++) {
         console.log('id: ' + databaseObject[i].id);
         console.log('latitude: ' + databaseObject[i].latitude);
         console.log('longitude: ' + databaseObject[i].longitude);

         this.markerName = databaseObject[i].id;
         this.markerLat = databaseObject[i].latitude;
         this.markerLng = databaseObject[i].longitude;
         this.markerDraggable = 'No';
         this.addMarker();
       }
   })

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
      console.log("Adding Marker2");
      var marker = {
        name:this.markerName,
        lat: parseFloat(this.markerLat),
        lng: parseFloat(this.markerLng),
        draggable:isDraggable
      }
      console.log("Adding Marker3");
      this.markers.push(marker);
            console.log("Adding Marker4");
      this.databaseService.addMarker(marker);
            console.log("Adding Marker5");
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
