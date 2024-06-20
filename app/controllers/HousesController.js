import { AppState } from "../AppState.js"
import { getFormData } from "../utils/FormHandler.js"
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

    createHouse() {
        event.preventDefault()
        console.log('Creating the House Listing!')
        const form = event.target
        const houseData = getFormData(form)
        console.log('Is this the same info from the form?', houseData)
    }
}