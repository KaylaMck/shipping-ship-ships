import { DockList } from "./DockList.js"
import { HaulerList } from "./HaulerList.js"
import { ShipList } from "./ShipList.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Shipping Ships</h1>
<article class="details">
    
    <section class="details_docks">
        <h2>Docks</h2>
        ${DockList()}
    </section>

    <section class="details_haulers">
        <h2>Hauling Ships</h2>
        ${HaulerList()}
    </section>

    <section class="details_shipping_ships">
        <h2>Shipping Ships</h2>
        ${ShipList()}
    </section>

</article>
`

mainContainer.innerHTML = applicationHTML