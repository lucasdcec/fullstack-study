import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));

var dadosDoFormulario = ""; // inicializa um objeto sem valor

function processarFormulario(dados) {
  return dados;
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "./public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  dadosDoFormulario = req.body["street"] + " " + req.body["pet"]; // o objeto recebe o valor do que é passado no FORMS
  res.redirect("/submit"); // redirecionamento
});

app.get("/submit", (req, res) => {
  const informations = JSON.stringify(dadosDoFormulario, null, 2);
  res.send(`<h1>Informações</h1>${dadosDoFormulario}✌️`);
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
