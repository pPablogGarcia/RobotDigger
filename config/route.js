const route = require('express').Router();

route.use(function timeLog(req, res, next) {
    var antes = Date.now();
    next();
    var duracao = Date.now() - antes;
    console.log(`Timer: ${duracao}ms`);
  });

  // Criar rotas - get, post

  module.exports = route;
