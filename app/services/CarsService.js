import { AppState } from "../AppState.js"
import { Car } from "../models/Car.js"
import { loadState, saveState } from "../utils/Store.js"

class CarsService {
  createCar(carData) {
    const cars = AppState.cars
    // REVIEW don't forget to turn your POJO into a class model before storing in the AppState
    const newCar = new Car(carData)
    cars.push(newCar)

    this.saveCars()
  }

  saveCars() {
    // first argument is where we are storing the data, second argument is what we are storing
    saveState('cars', AppState.cars)
  }

  loadCars() {
    // first argument is where we are pulling data out of, second argument is what we want to turn the data into
    AppState.cars = loadState('cars', Car) // 💂 cars!!!!!!!!!
  }
}

// NOTE singleton
export const carsService = new CarsService()