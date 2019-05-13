require('./models/User');
require('./services/passport'); //Configuration of google authentication
const express = require('express');
const mongoose = require('mongoose');

const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');


const app = express();
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000;

//
// const authRouter = require('./routes/authRoutes');
// authRoutes(app);
require('./routes/authRoutes')(app);

mongoose.connect(keys.mongoURI);
app.listen(PORT);

