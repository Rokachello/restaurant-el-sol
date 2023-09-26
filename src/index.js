import { container as firstPage} from "./js/initial-site";
import { container as menuPage} from "./js/menu";
import { container as infoPage } from "./js/info";
import './css/style.css';

let header = document.createElement("h1")
header.innerHTML = "EL SOL - COCKTAILS AND COLD BEER"

const navigationBar = document.createElement("div")
navigationBar.classList.add("navigation-bar")
const homeBtn = document.createElement("div")
homeBtn.innerHTML = "Home"
const menuBtn = document.createElement("div")
menuBtn.innerHTML = "Menu"
const infoBtn = document.createElement("div")
infoBtn.innerHTML = "Info"
navigationBar.append(homeBtn)
navigationBar.append(menuBtn)
navigationBar.append(infoBtn)

let currentContent = firstPage
const content = document.getElementById("content")
content.appendChild(header)
content.appendChild(navigationBar)
content.appendChild(currentContent)

homeBtn.addEventListener("click", () => {
    content.removeChild(currentContent)
    currentContent = firstPage
    content.appendChild(currentContent)
    homeBtn.classList.add("selected")
    menuBtn.classList.remove("selected")
    infoBtn.classList.remove("selected")
})

menuBtn.addEventListener("click", () => {
    content.removeChild(currentContent)
    currentContent = menuPage
    content.appendChild(currentContent)
    menuBtn.classList.add("selected")
    homeBtn.classList.remove("selected")
    infoBtn.classList.remove("selected")
})

infoBtn.addEventListener("click", () => {
    content.removeChild(currentContent)
    currentContent = infoPage
    content.appendChild(currentContent)
    infoBtn.classList.add("selected")
    homeBtn.classList.remove("selected")
    menuBtn.classList.remove("selected")
})
