// Enviroment variables
require('dotenv').config();

// Application instance
const express = require('express')
const app = express()
      
// Configs
require('./configs/middleware.config')(app)
require('./configs/locals.config')(app)

// Base URLS
app.use('/api/cloudinary', require('./routes/cloudinary.routes'))

app.use((req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});
      
module.exports = app;
