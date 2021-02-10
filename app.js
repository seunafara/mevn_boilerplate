const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
require('dotenv/config');

// Initialize the app
const app = express();

// Middlewares
// form data middleware
app.use(bodyParser.urlencoded({ extended: false }));
// Json body middleware
app.use(bodyParser.json());
// Cors Middleware
app.use(cors());

// Setting up static directory
app.use(express.static(path.join(__dirname, 'public')));

// Use passport middleware
app.use(passport.initialize());
// Bring in the Passport Strategy
require('./config/passport')(passport);

// Bring in the Database config and with database
const db = process.env.MONGODB_URL;
mongoose
   .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
      console.log(`Database connected successfully ${db}`);
   })
   .catch((err) => {
      console.log(err);
   });

// app.get('/', (req, res) => {
//   return res.send('<h1>Hello</h1>');
// });

// Bring in the routes
const apiV = 'v1';
const auth = require(`./routes/api/${apiV}/auth`);

app.use(`/api/${apiV}/auth`, auth);

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'public/index.html'));
});

var server = app.listen(process.env.PORT || 5000, function () {
   var port = server.address().port;
   console.log('Express is working on port ' + port);
});
