import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMaps";

export class User implements Mappable {
  name: string;
  location: { lat: number; lng: number };
  color: string;
  constructor() {
    this.name = faker.name.firstName();
    //Object has to be defined as Object & not directly via property
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    };
  }
  markerContent() {
    return `UserName: ${this.name}`;
  }
}
