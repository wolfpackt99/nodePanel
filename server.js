var Firebase = require('firebase')
	, express = require('express')
	, fs = require('fs')
	, http = require('http')
	, path = require('path')
  , io = require("socket.io")
  , amqp = require('amqp');

require('express-resource');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon( __dirname + '/public/img/favicon.ico'));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

var appRoutes = require('./routes/app')(app);

app.locals({
	staticAssetHost: 'http:"//localhost:3000',
	title: 'Panel'
});

var httpServer = http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

var ioListener = io.listen(httpServer);
ioListener.sockets.on('connection', function(socket){
  socket.on('tellDotNetToDoSomething', function(data){
    //publish to rabbit...
    console.log(data);
    conn.publish('Panel.Q.PanelCommand.panelCommand', data, {
      type: "TDJ_Panel_Library_PanelCommand:TDJ_Panel_Library"
    });
    console.log('published to rabbit.')
  });
});

var dataRef = new Firebase('https://tdj-notification-panel.firebaseio.com/panel');
dataRef.on('value', function(snapshot) {
  console.log('fred’s first name is ' + snapshot.val());
});


var url = 'amqp://192.168.1.105';
var implOpts = { // reconnection options
  reconnect: true,
  reconnectBackoffStrategy: 'linear', // or 'exponential'
  reconnectBackoffTime: 500,
};

var conn = amqp.createConnection({url: url }, implOpts);
conn.on('ready', function(){

});

/*var server = http.createServer(function(request,response){
	response.writeHead(200, {"Content-Type" : "text/plain"});
	response.end("test");
	dataRef.on('value', function(snapshot) {
  		console.log('fred’s first name is ' + snapshot.val());
	});
});

server.listen(8000);
console.log("server running at http://127.0.0.1:8000/");
*/