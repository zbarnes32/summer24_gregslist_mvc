export class Car {
  // constructor(make, model, year, imgURL, mileage, price, color, description, runs, fuelType, hasCleanTitle) {
  /**
   * @param {{ make: string; model: string; year: number; imgURL: string; mileage: number; price: number; color: string; description: string; runs: boolean; fuelType: string; hasCleanTitle: boolean; }} data
   */
  constructor(data) {
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.imgURL = data.imgURL
    this.mileage = data.mileage
    this.price = data.price
    this.color = data.color
    this.description = data.description
    this.runs = data.runs
    this.fuelType = data.fuelType
    this.hasCleanTitle = data.hasCleanTitle
  }

}
