const route = require('express').Router();

route.use(function timeLog(req, res, next) {
  var antes = Date.now();
  next();
  var duracao = Date.now() - antes;
  console.log(`Timer: ${duracao}ms`);
});

route.get('/', SearchForInformationByCompany);

module.exports = route;


function SearchForInformationByCompany(req, res) {
  let body = req.body.companyName;
  res.json({
    msg: "Teste de rota",
    body: body,
    info: "verificando a passagem de parâmetro"
  });
  console.log(body);
}