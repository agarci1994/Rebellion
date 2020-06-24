// Express
const express = require('express');
const cloudinaryRoutes = express.Router();


// Services
const cloudinaryAPIHandler = require('../services/statisticsAPIHandler')
const cloudinary = new cloudinaryAPIHandler()

const getCSV = require('../services/createCSV.function');
const getStatistic = require('../services/getStatistics.function');

cloudinaryRoutes.get('/statistics', (req, res, next) => {
  const storageImage = []

  cloudinary.getImage()
    .then(response => {
      storageImage.push(response.data.resources)
      return response.data.next_cursor && cloudinary.getImage(response.data.next_cursor)
    })
    .then(response => {
      response && storageImage.push(response.data.resources)
      return response.data.next_cursor && cloudinary.getImage(response.data.next_cursor)
    })
    .then(response => {
      response && storageImage.push(response.data.resources)
      return res.json(getStatistic(storageImage.flat()))
    })
    .catch(err => next(err))
});

cloudinaryRoutes.get('/csv', (req, res, next) => {
  const storageImage = []

  cloudinary.getImage()
    .then(response => {
      storageImage.push(response.data.resources)
      return response.data.next_cursor && cloudinary.getImage(response.data.next_cursor)
    })
    .then(response => {
      response && storageImage.push(response.data.resources)
      return response.data.next_cursor && cloudinary.getImage(response.data.next_cursor)
    })
    .then(response => {
      response && storageImage.push(response.data.resources)
      return res.json(getCSV(storageImage.flat()))
    })
    .catch(err => next(err))
})

module.exports = cloudinaryRoutes;