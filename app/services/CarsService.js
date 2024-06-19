import { AppState } from "../AppState.js"
import { Car } from "../models/Car.js"

class CarsService {
  createCar(carData) {
    const cars = AppState.cars
    // REVIEW don't forget to turn your POJO into a class model before storing in the AppState
    const newCar = new Car(carData)
    cars.push(newCar)
  }
}

// NOTE singleton
export const carsService = new CarsService()