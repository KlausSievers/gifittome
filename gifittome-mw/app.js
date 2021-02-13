const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
var compression = require('compression');
var helmet = require('helmet');
const http = require('http');

let tenorRouter = require('./routes/tenor');
let gameRouter = require('./routes/game');
let rootRouter = require('./routes/root');

let app = express();

let csp = helmet.contentSecurityPolicy.getDefaultDirectives();
csp['img-src'] = ["'self'", "https://media.tenor.com"];
csp['script-src']=["'self'", 'analytics.vfl-grafenwald-fussball.de', "'nonce-rM8BxQcSwut/THfk51P30w'"];
//@todo remove not needed ones
csp['connect-src'] = ["'self'", 'analytics.vfl-grafenwald-fussball.de', "ws://localhost:8083", "http://localhost:8083", "https://gif-it-to-me.com/socket.io/", "wss://gif-it-to-me.com/socket.io/", "https://gif-it-to-me.com/ws", "ws://gif-it-to-me.com/ws", "ws://gif-it-to-me.com:8083", "http://www.gif-it-to-me.com:8083"];

//app.use(compression()); @todo tenor get start fails
app.use(helmet({
  contentSecurityPolicy: {
    directives: csp
  }
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

let p = null;
if (process.env.NODE_ENV === 'production') {
  p = path.join(__dirname, './../ui/');
} else {
  p = path.join(__dirname, './../gifittome-ui/dist/gifittome/');
}
console.log('UI-Path: ' + p);
app.use(express.static(p));

app.use('/gif', tenorRouter);
app.use('/game', gameRouter);
app.use('/', rootRouter);

// let serverConfig = {
//   key: fs.readFileSync('cert/privateKey.key'),
//   cert: fs.readFileSync('cert/certificate.crt')                              
// };
let serverConfig = {};

http.createServer(serverConfig, app)
  .listen(8082, function () {
    console.log('Serve Listen on 8082');
  });

module.exports = app;

