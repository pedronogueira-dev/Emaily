require('./services/passport'); //Configuration of google authentication
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

//
// const authRouter = require('./routes/authRoutes');
// authRoutes(app);
require('./routes/authRoutes')(app);

app.listen(PORT);

