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

  get cardHTMLTemplate() {
    return `
    <div class="col-12 mb-3">
      <div class="car-card shadow">
        <div class="row">
          <div class="col-12 col-md-4 ">
            <img class="img-fluid bg-dark" src="${this.imgURL}" alt="${this.make} ${this.model}">
          </div>
          <div class="col-12 col-md-8">
            <div class="p-3">
              <h2>${this.year} ${this.make} ${this.model}</h2>
              <h2>$${this.price}</h2>
              <h3>${this.mileage} miles ${this.hasCleanTitle ? 'Clean Title' : 'Not Clean Title'}</h3>
              <h4>Runs on ${this.fuelType}</h4>
              <p>${this.description}</p>
              <h5>
                ${this.carRunsIcon}
              </h5>
              <div class="text-end">
                <button class="btn btn-success" type="button">Notify Seller</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }

  get carRunsIcon() {
    if (this.runs) {
      return '<i class="mdi mdi-car" title="Runs great"></i>'
    }

    // else
    return '<i class="mdi mdi-car-off" title="The car is broken"></i>'
  }

}
