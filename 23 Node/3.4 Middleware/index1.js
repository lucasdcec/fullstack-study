import express from "express";
import bodyParser from "body-parser"; // (1) para analisar as informações que chegam por meio do formulario
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)); // Todo o caminho dinâmico para o arquivo que queremos acessar

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); // (3) analisa as informações enviadas
// "encoded" = converter dados para um formato específico
// com isso, só a partir de agora conseguimos acessar o *req*uest

app.post("/submit", (req, res) => {
  // (2) vai segurar o post request quando o botão for apertado
  console.log(req.body);
});

app.get("/", (req, res) => {
  // console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html"); //requer um caminho exato para saber para onde enviar
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
