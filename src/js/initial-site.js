

const container = document.createElement("div")

let centerDiv = document.createElement("div")
centerDiv.classList.add("center")
let initialImage = document.createElement("img")
let initialText = document.createElement("p")
centerDiv.appendChild(initialImage)
centerDiv.appendChild(initialText)

initialImage.src = "../src/images/beachfront-bar.jpg"
initialText.innerHTML = "Visit us on the sunny beach"

container.append(centerDiv)

export {container}

