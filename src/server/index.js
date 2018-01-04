'use strict';

let path            = require('path'),
    express         = require('express'),
    bodyParser      = require('body-parser'),
    logger          = require('morgan'),
    _               = require('underscore');

let port = process.env.PORT ? process.env.PORT : 8080;
let env = process.env.NODE_ENV ? process.env.NODE_ENV : 'dev';

/**********************************************************************************************************/

// Setup our Express pipeline
let app = express();
if (env !== 'test') app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../../public')));
app.engine('pug', require('pug').__express);
app.set('views', __dirname);
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
require('./routes')(app);

// SPA base page
app.get('*', (req, res) => { res.render('base.pug', {}) });

// Run the server itself
let server = app.listen(port, () => { console.log('Assignment 3 app listening on ' + server.address().port) });
