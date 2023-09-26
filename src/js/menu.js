import { MenuItem, cocktailsList, beersList } from "./menu-item"


const container = document.createElement("div")



let cocktails = document.createElement("h2")
cocktails.textContent = "COCKTAILS"
let cocktailsMenu = document.createElement("div")

cocktailsList.forEach(element => {

    const name = document.createElement("h3")
    name.innerHTML = element.showName()
    const description = document.createElement("p")
    description.innerHTML = element.showDescription()
    const price = document.createElement("h3")
    price.innerHTML = element.showPrice()
    const menuItem = document.createElement("div")
    menuItem.appendChild(name)
    menuItem.appendChild(description)
    menuItem.appendChild(price)
    price.classList.add("price")
    menuItem.classList.add("menu-item")
    cocktailsMenu.appendChild(menuItem)

});

let beers = document.createElement("h2")
beers.textContent = "BEER"
let beersMenu = document.createElement("div")

beersList.forEach(element => {

    const name = document.createElement("h3")
    name.innerHTML = element.showName()
    const description = document.createElement("p")
    description.innerHTML = element.showDescription()
    const price = document.createElement("h3")
    price.innerHTML = element.showPrice()
    const menuItem = document.createElement("div")
    menuItem.appendChild(name)
    menuItem.appendChild(description)
    menuItem.appendChild(price)
    beersMenu.appendChild(menuItem)
    price.classList.add("price")
    menuItem.classList.add("menu-item")

});


let cocktailBanner = document.createElement("img")
cocktailBanner.src = "../src/images/cocktails.jpg"
cocktailBanner.classList.add("banner")
let beerBanner = document.createElement("img")
beerBanner.src = "../src/images/beer.png"
beerBanner.classList.add("banner")

container.appendChild(cocktailBanner)
container.appendChild(cocktails)
container.appendChild(cocktailsMenu)
container.appendChild(document.createElement("br"))
container.appendChild(beerBanner)
container.appendChild(beers)
container.appendChild(beersMenu)

export {container}

