/// <reference types="@types/google.maps" />
interface Pointer {
  location: {
    lat: number;
    lng: number;
  };
}
export class OwnMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addMark(pointer: Pointer): void {
    const mark = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: pointer.location.lat,
        lng: pointer.location.lng,
      },
    });
    mark.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: "Hi there!",
      });
      infoWindow.open(this.googleMap, mark);
    });
  }
}
