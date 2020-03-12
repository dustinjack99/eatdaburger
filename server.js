const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
			
//setting handlebars as template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body Parser

app.use(bodyParser.urlencoded( { extended: false }));

//setting static folder
app.use(express.static('public'));

//middleware launching - handles data parsing with Express
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/', require('./controllers/burgerController'));


app.listen(PORT, function() {
	// Log (server-side) when our server has started
	console.log('Server listening on: http: //localhost:' + PORT);
});