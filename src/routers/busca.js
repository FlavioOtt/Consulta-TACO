const express = require('express');
const buscaController = require("../controller/buscaController");
const buscaRouter = express.Router(); 

buscaRouter.get('/geral', async(req, res, next) => {
    busca = await buscaController.get(req.query.alimento);
    res.status(200).send(busca);
})

buscaRouter.get('/especifico', async(req, res, next) => {
    busca = await buscaController.especifico(req.query);
    res.status(200).send(busca);
})
    
module.exports = buscaRouter;
