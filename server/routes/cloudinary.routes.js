// Express
const express = require('express');
const cloudinaryRoutes = express.Router();

// Services
const cloudinaryAPIHandler = require('../services/statisticsAPIHandler')
const cloudinary = new cloudinaryAPIHandler()

// Functions
const getCSV = require('../services/functions/createCSV.function');
const getStatistic = require('../services/functions/getStatistics.function');

cloudinaryRoutes.get('/statistics', (req, res, next) => {

  cloudinary.getImage()
    .then(response => res.json(getStatistic(response.flat())))
    .catch(err => next(err))
});

cloudinaryRoutes.get('/csv', (req, res, next) => {

  cloudinary.getImage()
    .then(response => res.json(getCSV(response.flat())))
    .catch(err => next(err))
})

module.exports = cloudinaryRoutes;