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
    const order = getOrderBuilder()
    let html = "<ul>"
    const facMinerals = getFacilityMinerals()
    
    const facilityMinerals = facMinerals.filter(facMineral => facMineral.facilityId === order.facilityId)

    const listItems = facilityMinerals.map(mineral => {
        const foundMineral = minerals.find((foundMineral)=> foundMineral.id === mineral.mineralId) 
        return `
        <input type="radio" name="mineral" value="${mineral.quantityAvailable}" /> ${foundMineral.type}
    `
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

// export const buttonDisplay = () => {
//     const listItems = facilityMinerals.map(facilityMineral => {

//     }
// }