const express = require('express');
const app = express();
const exhbs = require('express-handlebars');

app.engine('handlebars', exhbs());
app.set('view engine', 'handlebars');




app.listenerCount(3001, () => {
    console.log('Server listening on port 3001');
    });
