const express = require("express");
const auth = require("../auth");
const router = express.Router();

const {
    currentWeatherMainCities,
    citySpecificWeather
} = require("../controllers/weather");

router.get("/weather/main-cities", auth, currentWeatherMainCities);
router.get("/weather/specific-city", auth, citySpecificWeather);

module.exports = router;
