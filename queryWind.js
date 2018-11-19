'use strict';

require('es6-promise').polyfill()
const fetch = require('isomorphic-fetch')

require('dotenv').config()

module.exports = function() {

  const darkSkyQuery = 'https://api.darksky.net/forecast/' + process.env.DARKSKY + '/' + process.env.LAT + ',' + process.env.LON

  console.log(darkSkyQuery)

  fetch(darkSkyQuery).then(function(res) {
    return res.json()
  }).then(function(res) {
    console.log(res.hourly.date.map(function(d) {
      return {
        bearing: d.windBearing,
        gust: d.windGust,
        speed: d.windSpeed
      }
    }))
  })
}
