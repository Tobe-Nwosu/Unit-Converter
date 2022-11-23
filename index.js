/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputBox = document.querySelector("#input-box")
let convertBtn = document.querySelector("#convert-btn")


let metersFeet = document.querySelector(".meters-feet")
let litersGallon = document.querySelector(".liters-gallons")
let kiloPounds = document.querySelector(".kilo-pounds")

let errorMsg = document.querySelector(".error-msg")


convertBtn.addEventListener("click", function(){
meterFeet()
volumeGallons()
kilogramsPounds()
} )




function meterFeet(){
  metersFeet.textContent = `${inputBox.value} meters = ${(inputBox.value * 3.281).toFixed(3)} feet | ${inputBox.value} feet = ${(inputBox.value * 0.3048).toFixed(3)} meters `

}

function volumeGallons(){
  litersGallon.textContent = `${inputBox.value} liters = ${(inputBox.value * 0.264).toFixed(3)} gallons | ${inputBox.value} gallons = ${(inputBox.value * 3.785).toFixed(3)} liters`
}

function kilogramsPounds(){
  kiloPounds.textContent = `${inputBox.value} kilos = ${(inputBox.value * 2.20).toFixed(3)}  pounds | ${inputBox.value} pounds = ${(inputBox.value * 0.453592).toFixed(3)} kilos`
}
