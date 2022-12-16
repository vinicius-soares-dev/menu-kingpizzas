const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const routes = require('./src/routes/routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname)));

app.set('view engine', 'ejs');

app.use(routes);

app.listen(PORT, () => {
    console.log('escutando: http://localhost:8000');
});