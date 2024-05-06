import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMaps";

//Optional implements to show errors at right place.
export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  color: string;
  location: { lat: number; lng: number };
  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    //Object has to be defined as Object & not directly via property
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent() {
    return `<div><h1>Company Name: ${this.companyName}</h1>
    <h3>Catch Phrase: ${this.catchPhrase}</h3></div>`;
  }
}
