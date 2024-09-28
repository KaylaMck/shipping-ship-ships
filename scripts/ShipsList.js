import { getShips } from "./database.js"

export const ShipList = () => {
    const ships = getShips()

    let shipsHTML = "<ul>"
        
        for (const ship of ships) {
            shipsHTML += `<li>${ship.name}</li>`
        }

    shipsHTML += "</ul>"
    return
}