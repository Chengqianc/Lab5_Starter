// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const select = document.getElementById("horn-select")
  let image = document.querySelector("img")
  let audio = document.querySelector("audio")
  let isParty = false

  let slider = document.querySelector("[type='range']")
  let icon = document.querySelector("[src='assets/icons/volume-level-2.svg']")

  const button = document.querySelector("button")
  const jsConfetti = new JSConfetti()

  select.addEventListener("input", (event) => {
    let selection = select.value
    if(selection == null){
      console.log(image)
      return
    }
    else if(selection == "air-horn"){
      isParty = false
      image.src = "assets/images/air-horn.svg"
      audio.src = "assets/audio/air-horn.mp3"
    }
    else if(selection == "car-horn"){
      isParty = false
      image.src = "assets/images/car-horn.svg"
      audio.src = "assets/audio/car-horn.mp3"
    }
    else if(selection == "party-horn"){
      isParty = true
      image.src = "assets/images/party-horn.svg"
      audio.src = "assets/audio/party-horn.mp3"
    }
  })

  slider.addEventListener("input", (event) => {
    let perc = slider.value
    audio.volume = Number(perc) * 0.01
    if(perc == 0){
      icon.src = "assets/icons/volume-level-0.svg"
    }
    else if(perc >= 1 && perc < 33){
      icon.src = "assets/icons/volume-level-1.svg"
    }
    else if(perc >=33 && perc<67){
      icon.src = "assets/icons/volume-level-2.svg"
    }
    else{
      icon.src = "assets/icons/volume-level-3.svg"
    }
  })

  button.addEventListener("click", (event) =>{
    audio.play()
    if(isParty){
      jsConfetti.addConfetti()
    }
  })
}