var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameStarted = false;

// Para iniciar o jogo
$(document).keypress(function () {
  if (!gameStarted) {
    $("#level-title").text("Level " + level);
    nextSequence();
    gameStarted = true;
  }
});

// Onde o usuário apertou
$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  playSound(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

// Faz a sequência do jogo
function nextSequence() {
  // Resetar os cliques do usuário
  userClickedPattern = [];
  //
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
  animatePress(randomChosenColour);
  $("#level-title").text("Level " + level);
  level++;
}

// Toca o som de cada botão
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Animação de quando é clicado
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

// Checar a resposta
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("acertou");

    // Checar se o usuário clicou em todas as cores da sequencia
    if (userClickedPattern.length === gamePattern.length) {
      // Chama a próxima sequencia depois de 0,5 segundos
      setTimeout(function () {
        nextSequence();
      }, 500);
    }
  } else {
    console.log("errou");
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 200);
    quandoPerder();
  }
}

function quandoPerder() {
  gamePattern = [];
  level = 0;
  gameStarted = false;
}
