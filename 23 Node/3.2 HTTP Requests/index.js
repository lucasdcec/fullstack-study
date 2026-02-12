import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hellooooo</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<p>nao vao pegar meu telefone</p>");
});
app.get("/about", (req, res) => {
  res.send("Futuro pertence a Deus");
});

app.listen(port, () => {
  console.log("tamo indo bem");
});
