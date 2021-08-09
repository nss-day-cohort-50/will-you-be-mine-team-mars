import { getFacilities, setFacility, getGovernors, setGovernor, getOrderBuilder } from "./database.js"
import { Governors } from "./Governors.js"

const orderBuilder = getOrderBuilder()
const governor = getGovernors()

const facilities = getFacilities()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "facility") {
            setFacility(parseInt(event.target.value))
        }
    }
)





export const Facilities = () => {
    const order = getOrderBuilder()
    let html = "<article id= \"facility\">"

    const listItemsArray = facilities.map(facility => {
        if (order.chosenGovernor > 0) {
            return `<div class = "facility options">
            <button name="facility" /> ${facility.name}</div> `
        } else {
            return `<div class = "facility options">
            <button name="facility" disabled /> ${facility.name}</div> `
        }


        // ` <button $ {orderBuilder.chosenGovernor > 0 ? "" : "disabled"}
        //     class="facility__selector"
        //     id="facility--${facility.id}">
        //     ${facility.name}
        // </button> `


    }

    )

    html += listItemsArray.join("")
    html += "</button>"
    return html
}