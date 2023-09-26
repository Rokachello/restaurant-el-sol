
const container = document.createElement("div")
let header = document.createElement("h1")
let infoContainer = document.createElement("div")
let phone = document.createElement("p")
let email = document.createElement("p")
let location = document.createElement("p")

let openingHours = document.createElement("p")
openingHours.textContent = "WORKING HOURS:"

let workingHours = {
    "monday": "closed",
    "tuesday": "10:00 - 20:00",
    "wednesday": "10:00 - 20:00",
    "thursday": "10:00 - 22:00",
    "friday": "10:00 - 24:00",
    "saturday": "8:00 - 24:00",
    "sunday": "8:00 - 20:00"
  };

  phone.innerHTML = " ☎️ : +386 51 223 071"
  email.innerHTML = "✉️ : info@elsol.com"
  location.innerHTML = "📍: Sunny beach 66 (via Turtle road)"
phone.classList.add("info-text")
email.classList.add("info-text")
location.classList.add("info-text")

let workingHoursTable = document.createElement("table")
workingHoursTable.appendChild(openingHours)

for (let day in workingHours){
    let row = document.createElement("tr")
    let dayCell = document.createElement("td")
    let timeCell = document.createElement("td")

    dayCell.innerHTML = day
    timeCell.innerHTML = workingHours[day]

    row.appendChild(dayCell)
    row.appendChild(timeCell)
    workingHoursTable.appendChild(row)
    workingHoursTable.classList.add("table-left")
}

let contactInfoContainer = document.createElement("div")
contactInfoContainer.appendChild(phone)
contactInfoContainer.appendChild(email)
contactInfoContainer.appendChild(location)


header.innerHTML = "EL SOL - COCKTAILS AND COLD BEER"

infoContainer.appendChild(workingHoursTable)
infoContainer.appendChild(contactInfoContainer)
infoContainer.classList.add("center-info")
container.appendChild(infoContainer)

export {container}

