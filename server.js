// dependencies
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Person = require('./api/models/Model'),
  bodyParser = require('body-parser');

// connecting to MongoDB/Mongoose instance
mongoose.connect('mongodb://localhost/hwchallenge', {
  useMongoClient: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// import routes
var routes = require('./api/routes/Routes');
routes(app);

app.listen(port);

console.log('Server started on ' + port);
