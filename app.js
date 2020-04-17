require('./config/config');
require('./config/db');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const apiRoute = require('./routes');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', apiRoute);

async function main() {
    await app.listen(process.env.PORT);
    console.log("Server on port", process.env.PORT);
}
main();
