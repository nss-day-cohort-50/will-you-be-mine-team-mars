import { getMinerals, setMineral, getFacilityMinerals, getChosenMinerals, setFacility, getOrderBuilder} from "./database.js"


const minerals = getMinerals()
const order = getOrderBuilder()

document.addEventListener(
    "click",
    (event) => {
        if (event.target.name === "facility") {
            setFacility(parseInt(event.target.value))
        }
    }
)


export const facilityMineral = () => {
    let html = "<ul>"
    const facMinerals = getFacilityMinerals()
    
    const minerals = facMinerals.filter(facMineral => facMineral.facilityId === order.selectedFacility)

    const listItems = minerals.map(mineral => {
        if (minerals.mineralId === minerals.id) {
        return `<ul>
            <input type="radio" name="mineral" value="${minerals.quantityAvailable}" /> ${mineral.type}
        </ul>`
        } else 
        if (minerals.mineralId !== minerals.id) {
        return `<ul>
            <input type="radio" name="mineral" disabled="true" value="${minerals.quantityAvailable}" /> ${mineral.type}
        </ul>` 
        }
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

// export const buttonDisplay = () => {
//     const listItems = facilityMinerals.map(facilityMineral => {

//     }
// }