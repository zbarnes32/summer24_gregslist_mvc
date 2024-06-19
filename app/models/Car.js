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
            <img class="img-fluid bg-dark"
              src="https://images.unsplash.com/photo-1552615526-40e47a79f9d7?q=80&w=2176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mazda Miata">
          </div>
          <div class="col-12 col-md-8">
            <div class="p-3">
              <h2>1997 Mazda Miata</h2>
              <h2>$6000</h2>
              <h3>2000 miles Clean Title</h3>
              <h4>Runs on gasoline</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed veritatis ullam mollitia sit perspiciatis
                totam eligendi commodi, debitis earum alias!</p>
              <h5>
                <i class="mdi mdi-car-off" title="The car is broken"></i>
                <i class="mdi mdi-car" title="Runs great"></i>
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

}
