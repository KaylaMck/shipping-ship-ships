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
    ]
}

export const getDocks = () => {
    return database.docks.map(docks => ({...docks}))
}

export const getHaulers = () => {
    return database.haulers.map(haulers => ({...haulers}))
}