
const container = document.getElementById("content")

let initialHeader = document.createElement("h1")
let initialImage = document.createElement("img")
let initialText = document.createElement("p")

initialHeader.innerHTML = "EL SOL - COCKTAILS AND BEERSSSS"
initialImage.src = "../src/images/beachfront-bar.jpg"
initialText.innerHTML = "Visit us on the hidden beach"

container.appendChild(initialHeader)
container.appendChild(initialImage)
container.appendChild(initialText)

export {container}

