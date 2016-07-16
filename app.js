var express = require('express'),
    bodyParser = require('body-parser'),
    load = require('express-load');

app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

load('config').then('controllers').then('routes').into(app);

app.listen(3000, () => {
   console.log("Server started on port 3000"); 
});