import { getShips } from "./database.js"        //importing a copy of the ships object from the database

export const ShipList = () => {                 //creating a ShipList function to generate a HTML list of ships
    const ships = getShips()                    //retrieving the array of ship objects

    let shipsHTML = "<ul>"              //initializing the HTML string w/ the <ul> opening tag
         
        for (const ship of ships) {                     //for..of loop to iterate through each ship object in the ships array
            shipsHTML += `<li>${ship.name}</li>`        //create a new HTML string for each ship object w/ a name property
        }

    shipsHTML += "</ul>"                //loop is finished, closing with </ul> tag
    return shipsHTML                //returns the complete HTML list
}