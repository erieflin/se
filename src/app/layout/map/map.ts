import { Component } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Home } from '../../utils/home';

@Component({
  selector: 'map',
  templateUrl: './map.html',
  styleUrls: ['./map.css'],
  providers: [DatabaseService]
})

export class MapComponent {

 response:any;

 httpAddress = 'http://rebekahestey.com/cv64/se/database/getHomes.php';
 
  id = '1';
  mapLink = '';
  homeLink = '';
  imageCount = '';
  address = '';
  price = '';
  title1 = '';
  title2 = '';
  description = '';
   latitude = '';
 longitude = '';
 
  zoom: number = 13;
  lat: number = 34.024212;
  lng: number = -118.496475;
  markerName:string;
  markerLat:string;
  markerLng:string;
  markerDraggable:string;

  homes: Home[] = [];

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
        console.log('mapLink: ' + databaseObject[i].mapLink);
        console.log('homeLink: ' + databaseObject[i].homeLink);
        console.log('imageCount: ' + databaseObject[i].imageCount);
        console.log('address: ' + databaseObject[i].address);
        console.log('price: ' + databaseObject[i].price);
        console.log('title1: ' + databaseObject[i].title1);
        console.log('title2: ' + databaseObject[i].title2);
        console.log('description: ' + databaseObject[i].description);
        console.log('latitude: ' + databaseObject[i].latitude);
        console.log('longitude: ' + databaseObject[i].longitude);

        this.homes.push(new Home(databaseObject[i].id, databaseObject[i].mapLink,
          databaseObject[i].homeLink, databaseObject[i].imageCount, databaseObject[i].address,
          databaseObject[i].price, databaseObject[i].title1, databaseObject[i].title2,
          databaseObject[i].description, databaseObject[i].latitude, databaseObject[i].longitude));
      }
  	})
  }

  clickedMarker(marker:marker, index:number) {
    console.log('Clicked Marker: ' + marker.name + ' at index ' + index);
  }
}

// Marker Type
interface marker {
  name:string;
  lat:number;
  lng:number;
  draggable:boolean;
}
