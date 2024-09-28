import { getHaulers } from "./database.js" 

export const HaulerList = () => {       //creates HaulerList function to generate HTML list of haulers
    const haulers = getHaulers()        //retrieves the array of hauler objects

    let haulersHTML = "<ul>"            //starts the HTML string

    for (const hauler of haulers) {                     //for..of loop to iterate through each hauler object
        haulersHTML += `<li>${hauler.name}</li>`        //creates a new list item for each hauler object that contains a name property
    }

    haulersHTML += "</ul>"          //loop is done, HTML generating is complete
    return haulersHTML              //returning HTML generated string 
}

