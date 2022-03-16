const express = require("express");
const nunjucks = require("nunjucks");

const app = express();
app.use(express.static("static"));

const frutas = [
  {
    nombre: "banana",
    url: "/img/banana.png",
    precio: 1000,
  },
  {
    nombre: "cebollas",
    url: "/img/cebollas.png",
    precio: 500,
  },
  {
    nombre: "lechuga",
    url: "/img/lechuga.png",
    precio: 200,
  },
  {
    nombre: "papas",
    url: "/img/papas.png",
    precio: 2500,
  },
  {
    nombre: "pimenton",
    url: "/img/pimenton.png",
    precio: 700,
  },
  {
    nombre: "tomate",
    url: "/img/tomate.png",
    precio: 1000,
  },
];

nunjucks.configure("views", {
  express: app,
  autoescape: true,
  watch: true,
});

app.get("/", (req, res) => {
  res.render("index.html", { frutas });
});

app.listen(3000, () => {
  console.log("Servidor en puerto 3000");
});
