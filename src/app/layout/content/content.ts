import { Component } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Home } from '../../utils/home';

@Component({
  selector: 'content',
  templateUrl: './content.html',
  styleUrls: ['./content.css'],
  providers: [DatabaseService]
})

export class ContentComponent {

 response:any;

 httpAddress = 'http://rebekahestey.com/cv64/se/database/getHomes.php';
 imagesPath = 'http://rebekahestey.com/cv64/se/homes/';

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

 homes: Home[] = [];

 constructor(private databaseService:DatabaseService) {
   console.log('ContentComponent.constructor');

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
/*
 addHome(addhome:any) {
   console.log("Adding Home");
   console.log("Adding Home: " + addhome.id);

   var home = {
     id:addhome.id,
     mapLink:addhome.mapLink,
     homeLink:addhome.homeLink,
     imageCount:addhome.imageCount,
     address:addhome.address,
     price:addhome.price,
     title1:addhome.title1,
     title2:addhome.title2,
     description:addhome.description,
     latitude:addhome.latitude,
     longitude:addhome.longitude
   }

   this.id = home.id;
   this.mapLink = home.mapLink;
   this.homeLink = this.homeLink;
   this.imageCount = this.imageCount;
   this.address = home.address;
   this.price = home.price;
   this.title1 = home.title1;
   this.title2 = home.title2;
   this.description = home.description;
   this.latitude = home.latitude;
   this.longitude = home.longitude;
 }
 */
}
