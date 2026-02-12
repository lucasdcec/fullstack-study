let imagensImport = [
  "dice1.png",
  "dice2.png",
  "dice3.png",
  "dice4.png",
  "dice5.png",
  "dice6.png",
];

function sortear() {
  // Sorteia um índice de 0 a 5
  let indice1 = Math.floor(Math.random() * imagensImport.length);
  let indice2 = Math.floor(Math.random() * imagensImport.length);

  // Pega os nomes dos arquivos
  let dado1 = imagensImport[indice1];
  let dado2 = imagensImport[indice2];

  document.querySelector(".img1").setAttribute("src", `images/${dado1}`);
  document.querySelector(".img2").setAttribute("src", `images/${dado2}`);

  // Lógica de quem venceu
  if (indice1 > indice2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else if (indice2 > indice1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

sortear();
