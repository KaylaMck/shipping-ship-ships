const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        {id: 1, name: "Pioneer Spirit", dockId: 1},
        {id: 2, name: "Boaty McBoatface", dockId: 2},
        {id: 3, name: "Seawise Giant", dockId: 3},
        {id: 4, name: "Mayweather Mayflower", dockId: 4}
    ],
    ships: [
        {id: 1, name: "Esso Atlantic", haulerId: 1},
        {id: 2, name: "Prairial", haulerId: 2},
        {id: 3, name: "Palais Royal", haulerId: 3},
        {id: 4, name: "Rivoli", haulerId: 4},
        {id: 5, name: "Champs Elysee", haulerId: 1},
        {id: 6, name: "Ever Ace", haulerId: 2},
        {id: 7, name: "Nissei Maru", haulerId: 3},
        {id: 8, name: "MSC Gulsun", haulerId: 4},
        {id: 9, name: "HMM Rotterdam", haulerId: 1},
        {id: 10, name: "CMA CGM Trocadero", haulerId: 2}
    ]
}

export const getDocks = () => {                           //using a getter function to retrieve the docks object from the database
    return database.docks.map(docks => ({...docks}))      //iterating through the database and making a copy of the docks object to export
}

export const getHaulers = () => {                           //getting the hauler objects from the database
    return database.haulers.map(haulers => ({...haulers}))     //iterating through the hauler objects and creating a copy to be exported
}

export const getShips = () => {                              //using getter function to retrieve the ships object from the database
    return database.ships.map(ships => ({...ships}))        //iterating through ships object and creating a copy to be exported
}