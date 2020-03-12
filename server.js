const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));
			
//setting handlebars as template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//middleware launching - handles data parsing with Express
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res) => res.send('index'));

app.use('/burgers', require('./controllers/burgerController'));


app.listen(PORT, function() {
	// Log (server-side) when our server has started
	console.log('Server listening on: http: //localhost:' + PORT);
});