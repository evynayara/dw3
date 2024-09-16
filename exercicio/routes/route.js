//@ Importa as bibliotecas e arquivos
const express = require("express");
const routerApp = express.Router();
const calculadora = require("../controller/calculadora")

//@ Configura as rotas
routerApp.post("/calculadora", calculadora.resulcalc);

//@ Exporta a variável com as rotas
module.exports = routerApp;