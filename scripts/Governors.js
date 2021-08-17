import { getGovernors, getOrderBuilder, setGovernor } from "./database.js"


const governors = getGovernors()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "governor") {
            const chosenGovernor = parseInt(event.target.value)
            setGovernor(chosenGovernor)
        }
    }
)









{/* <button onclick="myFunction()">Click me</button> */}
// this code breaks it but we are using it in a minute.









export const Governors = () => {
    const order = getOrderBuilder()
    
    let html = `<select name="governor"><option value="0">Please select a governor...</option>`

    const listItemsArray = governors.map(governor => {
        // if (governor.active === true) {
        //     return `<option input type="checkbox" name="governor" value=${governor.id}/> ${governor.name}
        // </option>`
        // } else {
        //     return `<option input type="checkbox" disabled="true" name="governor" value=${governor.id}/> ${governor.name}
        //     </option>`
        // }             
        
        if (governor.active === true) {
            {
            return `<option value=${governor.id}> ${governor.name}
            </option>`}
        } else 
        if (governor.id === order.chosenGovernor){
            return `<option value=${governor.id} selected> ${governor.name}
            </option>`
        } 
        
    })
    html += listItemsArray.join("")
    html += "</select>"
    return html
}

