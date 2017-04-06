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

 homes: any;
 segmentedHomes: any;
private background = 'http://rebekahestey.com/cv64/se/homes/se1/images/0a.jpg';
 constructor(private databaseService:DatabaseService) {
   console.log('ContentComponent.constructor');

 this.databaseService.getResponse("homes.json").subscribe(value => {
      this.response = value;
      console.log('app.component.ts');
      console.log('this.response.json(): ' + this.response.json());
      console.log('JSON.stringify(this.response.json()) ' + JSON.stringify(this.response.json()));
      this.homes= this.response.json();



	this.breakOutHomes();
  })
  }
 private breakOutHomes(){
      if(!this.homes){
      return;
      }
      var primaryList = []
      var list = []
      var index = 1;
      this.homes.forEach((item) => {
        list.push(item);
        if(index%3 ==0){
          primaryList.push(list);
          list=[];
          }
          index ++;
          });
    primaryList.push(list);
    this.segmentedHomes= primaryList;
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
 }
 */
}
