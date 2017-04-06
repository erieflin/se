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
  lat: number = 34.0737496;
  lng: number = -118.4642746;
  markerName:string;
  markerLat:string;
  markerLng:string;
  markerDraggable:string;

  markers: marker[] = [];

  constructor(private databaseService:DatabaseService) {

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
         console.log('price: ' + databaseObject[i].price);
         console.log('latitude: ' + databaseObject[i].latitude);
         console.log('longitude: ' + databaseObject[i].longitude);

         this.markerName = databaseObject[i].price + "\n" + databaseObject[i].id;
         this.markerLat = databaseObject[i].latitude;
         this.markerLng = databaseObject[i].longitude;
         this.markerDraggable = 'No';
         this.addMarker();
       }
    })
  }

  clickedMarker(marker:marker, index:number) {
    console.log('map.ts.clickedMarker: ' + marker.name + ' at index ' + index);
  }

  mapClicked($event:any) {
    console.log('map.ts.mapClicked')

    var newMarker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable:false
    }

    //this.markers.push(newMarker);
  }

  markerDragEnd(marker:any, $event:any) {
    console.log('map.ts.markerDragEnd: ', marker, $event);

    var updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable:false
    }

    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;

    //this.databaseService.updateMarker(updMarker, newLat, newLng);
  }

    addMarker() {
      console.log('map.ts.addMarker');

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
      console.log('map.ts.removeMarker');

      /*
        for(var i = 0; i < this.markers.length; i++) {
          if (marker.lat == this.markers[i].lat && marker.lng == this.markers[i].lng) {
            this.markers.splice(i, 1);
          }
        }

        this.databaseService.removeMarker(marker);
      */
    }
}

// Marker Type
interface marker {
  name:string;
  lat:number;
  lng:number;
  draggable:boolean;
}
