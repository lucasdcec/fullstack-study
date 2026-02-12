var botoes = document.querySelectorAll(".drum");

for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function () {
    var audio_letraTeclado = this.innerHTML;
    makeSound(audio_letraTeclado);
    pressedAnimation(audio_letraTeclado);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key); // o key é uma propriedade o event que diz a letra que clicou
  pressedAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
  }
}

function pressedAnimation(buttonPressed) {
  document.querySelector("." + buttonPressed).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + buttonPressed).classList.remove("pressed");
  }, 100);
}

// function CatholicBoy(name, age, paroquias) {
//   this.name = name;
//   this.age = age;
//   this.paroquias = paroquias;
//   this.naMissa = function () {
//     console.log("Piedoso");
//   };
// }
// var catholicBoy = new CatholicBoy("Lucas", 19, ["PNLS", "Arautos", "SV"]);
// catholicBoy.naMissa();
// function Audio(fileLocation){
//   this.fileLocation = fileLocation
//   this.play = function (){

//   }
// }
