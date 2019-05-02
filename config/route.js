const route = require('express').Router();
const searchController = require('../controller/searchController.js');

route.post('/', SearchForInformationByCompany);

async function SearchForInformationByCompany(req, res) {
  let body = req.body.companyName;
  res.json(await searchController.search(body));
};

module.exports = route;