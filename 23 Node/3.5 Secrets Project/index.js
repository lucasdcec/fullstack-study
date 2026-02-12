import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

const secretPassword = "linkedin";
var permitido = false;

app.use(bodyParser.urlencoded({ extended: true }));

function enviarSenha(req, res, next) {
  const senha = req.body["password"];
  if (senha == secretPassword) {
    permitido = true;
  }
  next();
}

app.use(enviarSenha);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (permitido) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log("Rodando na " + port);
});
