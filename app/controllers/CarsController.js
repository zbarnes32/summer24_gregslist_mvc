import { AppState } from "../AppState.js";
import { getFormData } from "../utils/FormHandler.js";
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

  createCar() {
    event.preventDefault() // do not refresh the page!
    const form = event.target
    console.log('got the form', form);
    const carData = getFormData(form)
    // REVIEW DO NOT WRITE ADDITIONAL CODE BEYOND THIS POINT UNTIL YOUR DATA OBJECT LOOKS CORRECT
    console.log('here is the car data from the form!', carData);
  }
}