import { faker } from "@faker-js/faker";
import { Pointer } from "./OwnMap";

export class Company implements Pointer {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "orange";
  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markInfo(): string {
    return `
    <div>
    <h1>Company Name: ${this.companyName} </h1>
    <h3>Catch Phrase: ${this.catchPhrase} </h3>
    </div>
    `;
  }
}
