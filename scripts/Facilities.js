import { getFacilities, setFacility, getGovernors, setGovernor, getOrderBuilder } from "./database.js"
import { Governors } from "./Governors.js"

const governor = getGovernors()

const facilities = getFacilities()

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "facility") {
            setFacility(parseInt(facilityId))
        }
    }
)





export const Facilities = () => {
    const order = getOrderBuilder()
    let html = "<article id= \"facility\">"

    const listItemsArray = facilities.map(facility => {
        if (order.chosenGovernor > 0) {
            return `<div class = "facility options">
            <button name="facility" value="${facility.id}">  ${facility.name}</div> `
        } 
        else {
            return `<div class = "facility options">
            <button name="facility" disabled> ${facility.name}</div> `
        }



    }

    )

    html += listItemsArray.join("")
    html += "</button>"
    return html
}