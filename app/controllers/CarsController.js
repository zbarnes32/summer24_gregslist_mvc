import { AppState } from "../AppState.js";
import { carsService } from "../services/CarsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";

export class CarsController {
  constructor() {
    // 💂---------> cars
    AppState.on('cars', this.drawCars)

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
    const carData = getFormData(form) // pulls all values out of named inputs from form element
    // checks to see if the string is 'on', assigns to that boolean
    carData.hasCleanTitle = carData.hasCleanTitle == 'on'
    carData.runs = carData.runs == 'on'

    // REVIEW DO NOT WRITE ADDITIONAL CODE BEYOND THIS POINT UNTIL YOUR DATA OBJECT LOOKS CORRECT
    console.log('here is the car data from the form!', carData);
    carsService.createCar(carData)

    // @ts-ignore
    form.reset()
  }
}