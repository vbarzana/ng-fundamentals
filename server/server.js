const express = require('express');
const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 8808
const app = express();
require('./expressConfig')(app);
require('./passport')();
require('./routes')(app);
app.listen(port);
console.log('Listening on port ' + port + '...');
