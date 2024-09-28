import {getDocks} from "./database.js" //importing the copy of the the docks object

export const DockList = () => {         //creating a DockList function to generate an HTML list of docks
    const docks = getDocks()            //retrieving the array of dock objects

    let docksHTML = "<ul>"              //initializing a string to build up HTML list of docks

        for (const dock of docks) {                      //for.. of loop to iterate over each dock object in docks array
            docksHTML += `<li>${dock.location}</li>`    //add a new list item for each each dock object that contains a location property
        }

    docksHTML += "</ul>"        //loop is done, list is complete
    return docksHTML            //returns the complete HTML list 
}