const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const server = require('./server.js');
const route = require('./route');

const app = express();

/*================================*/
/*          MIDDLEWARES           */

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*================================*/

/*================================*/
/*             ROUTE              */

app.use('/api', route);

/*================================*/

/*================================*/
/*      Listenning Server         */
app.listen(server.port, inicialize);

function inicialize(){
    console.log(server.logSuccess);
}
/*================================*/

// Export for index
module.exports = app;