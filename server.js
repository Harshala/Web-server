var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);
//app.use(middleware.requiredAuthentication);

app.get('/about', middleware.requiredAuthentication ,function(req, res){
	res.send('About Us');
});

app.use(express.static(__dirname + '/'));

app.listen(PORT, function(){ console.log('Server started at port:' + PORT);});