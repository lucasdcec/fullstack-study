import express from "express";
import ejs from "ejs";
const hoje = new Date();
let diaSemana = hoje.getDay();
let fraseDia = "";

const app = express();
const port = 3000;

[diaSemana, fraseDia] =
  diaSemana >= 1 && diaSemana <= 5
    ? ["dia da semana", "its time to work"]
    : ["fim de semana", "its time to relax"];

app.get("/", (req, res) => {
  res.render("index.ejs", { day: diaSemana, frase: fraseDia });
});

app.listen(port, () => {
  console.log("Deu certo na porta " + port);
});
