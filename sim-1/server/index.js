const express = require('express');
const bodyParser = require('body-parser');
const cors = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller')

const app = express();
app.use( bodyParser.json() );
app.use( cors() );
massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );

const port = process.env.PORT || 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );

app.get( '/api/shelf/:id', controller.getAll );
app.get( '/api/bin/:id', controller.getOne );
app.put( '/api/bin/:id', controller.update );
app.delete( '/api/bin/:id', controller.delete );
app.post( '/api/bin/:id', controller.create );