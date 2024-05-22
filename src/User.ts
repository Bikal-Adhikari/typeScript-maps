import { faker } from "@faker-js/faker";
import { Pointer } from "./OwnMap";

export class User implements Pointer {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";
  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markInfo(): string {
    return `Name: ${this.name}`;
  }
}
