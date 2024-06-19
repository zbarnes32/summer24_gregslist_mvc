import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

export class CarsController {
  constructor() {
    console.log('Cars Controller is loaded!');
    this.drawCars()
  }

  drawCars() {
    const cars = AppState.cars
    let innerHTMLString = ''
    cars.forEach((car) => innerHTMLString += car.cardHTMLTemplate)
    setHTML('carListings', innerHTMLString)
  }
}