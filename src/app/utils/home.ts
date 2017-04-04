export class Home {

  id:string;
  mapLink:string;
  homeLink:string;
  imageCount:string;
  address:string;
  price:string;
  title1:string;
  title2:string;
  description:string;

  constructor(id:string, mapLink:string, homeLink:string, imageCount:string, address:string,
  price:string, title1:string, title2:string, description:string) {
    this.id = id;
    this.mapLink = mapLink;
    this.homeLink = homeLink;
    this.imageCount = imageCount;
    this.address = address;
    this.price = price;
    this.title1 = title1;
    this.title2 = title2;
    this.description = description;
  }

  getId() {
    return "Home.id: " + this.id;
  }
}
