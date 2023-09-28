

const container = document.createElement("div")

let centerDiv = document.createElement("div")
centerDiv.classList.add("center")

let imageNav = document.createElement("div")
imageNav.classList.add("image-nav")

let initialImage = document.createElement("img")
initialImage.classList.add("location-image")

// image navigation buttons
let prevImage = document.createElement("img")
let nextImage = document.createElement("img")
prevImage.classList.add("arrow")
nextImage.classList.add("arrow")
prevImage.src = "/src/images/left-arrow.png"
nextImage.src = "/src/images/arrow-right.pn"

imageNav.appendChild(prevImage)
imageNav.appendChild(initialImage)
imageNav.appendChild(nextImage)

let initialText = document.createElement("p")

//image and text added to center div
centerDiv.appendChild(imageNav)
centerDiv.appendChild(initialText)


// photos used
let imageOne = "../src/images/beachfront-bar.jpg"
let imageTwo = "../src/images/Tayrona.jpg"
let imageThree = "../src/images/tayrona2.jpg"
let imageFour = "../src/images/bar1.jpg"
let imageFive = "../src/images/bar2.jpeg"
let imageSix = "../src/images/bar3.jpg"
let imageSeven ="../src/images/bar4.jpg"
let images = [imageOne,imageTwo,imageThree, imageFour, imageFive, imageSix, imageSeven]


// image changes logic
let currentIndex = 0
initialImage.src = images[currentIndex]

let changeToNextImage = () => {
    if(currentIndex < images.length-1){
        currentIndex++
    } else {
        currentIndex = 0
    }
    initialImage.src = images[currentIndex]
}

let changeToPreviousImage = () => {
    if(currentIndex > 0){
        currentIndex--
    } else {
        currentIndex = images.length -1
    }
    initialImage.src = images[currentIndex]
}

nextImage.addEventListener("click", changeToNextImage)
prevImage.addEventListener("click", changeToPreviousImage)

initialText.innerHTML = "Visit us on the sunny beach"

container.append(centerDiv)

export {container}

