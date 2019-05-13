const route = require('express').Router();
const searchController = require('../controller/searchController.js');

route.post('/', SearchForInformationByCompany);
route.get('/', (req, res) => {
  res.status(200).json({
    msg: "Teste de Rota!",
    author: "Pablo Garcia"
  });
});

async function SearchForInformationByCompany(req, res) {
  let body = req.body.companyName;
  console.log(body);
  res.json(await searchController.search(body));
};

module.exports = route;