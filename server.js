// Import ReNo
// --------------------------------
var reno = require('./server/reno');
var app = reno.app;
var config = reno.config;


// Import modules
// --------------------------------
require('./server/todo/index');


// Error page
// --------------------------------
app.use(function (req, res, next) {
    var error = new Error('Page Not Found');
    error.status = 404;
    next(error);
});


// Run app
// --------------------------------
var server = require("http").createServer(app);
server.listen(config.adminPort);
console.info('Webserver started at http://localhost:' + config.adminPort);
