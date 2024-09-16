//@ Importa as bibliotecas e arquivos
const express = require("express");
const routerApp = express.Router();
const appHello = require("../controller/ctlHello");
const calculadora = require("../controller/calculadora")

//@ Configura as rotas
routerApp.get("/", appHello.hello);
routerApp.post("/helloUser", appHello.helloUser);
routerApp.post("/calculadora", calculadora.resulcalc);

//@ Exporta a variável com as rotas
module.exports = routerApp;