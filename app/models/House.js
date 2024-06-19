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
}