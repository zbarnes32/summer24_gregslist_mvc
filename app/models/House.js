import { generateId } from "../utils/GenerateId.js"

export class House {

    /**
     * @param {{ address: string; year: number; bedrooms: number; bathrooms: number; sqft: number; price: number; description: string; imgUrl: string; }} data
     */
    constructor(data) {

        //TODO this.id = data.id || generateId()
        this.address = data.address
        this.year = data.year
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
    }

    get houseCardHTMLTemplate() {
        return `
        <div class="col-12 mb-3">
          <div class="car-card shadow house-card">
            <div class="row">
              <div class="col-12 col-md-4 ">
                <img class="img-fluid bg-dark" src="${this.imgUrl}" alt="House at ${this.address}">
              </div>
              <div class="col-12 col-md-8">
                <div class="p-3">
                  <h2>${this.address}</h2>
                  <h2>$${this.price}</h2>
                  <h4>Description: ${this.description}</h4>
                  <h5>Build in ${this.year} Bedroom(s):${this.bedrooms} Bathroom(s): ${this.bathrooms} Square Feet: ${this.sqft}</h5>
                  <div class="text-end">
                    <button onclick="" class="btn btn-outline-danger" type="button">Delete House</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        `
      }
}