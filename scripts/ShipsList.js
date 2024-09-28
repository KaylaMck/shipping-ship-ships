import { getShips } from "./database.js"

export const ShipsList = () => {
    const ships = getShips()

    let shipsHTML = "<ul>"
        for (ship of ships) {
            shipsHTML += `<li>${ship.name}</li>`
        }
    shipsHTML += "</ul>"
    return shipsHTML
}