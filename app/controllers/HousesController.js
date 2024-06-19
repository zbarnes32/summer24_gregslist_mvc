import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"

export class HousesController {
    constructor(){
        console.log('From the HousesController')
        this.drawHouse()
    }

    drawHouse() {
        const houses = AppState.houses
        let innerHTMLString = ''
        houses.forEach((house)=> innerHTMLString += house.houseCardHTMLTemplate)
        setHTML('houseListing', innerHTMLString)
    }
}