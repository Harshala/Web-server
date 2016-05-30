var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requiredAuthentication: function(req, res, next){
		console.log('Private route hit!');
		next();
	},
	logger: function(req, res, next)
	{
		console.log('REQUEST: '+ new Date().toString() +' '+ req.method + req.originalUrl);
		next();
	}
}

app.use(middleware.logger);
//app.use(middleware.requiredAuthentication);

app.get('/about', middleware.requiredAuthentication ,function(req, res){
	res.send('About Us!');
});

app.use(express.static(__dirname + '/'));

app.listen(PORT, function(){ console.log('Server started at port:' + PORT);});