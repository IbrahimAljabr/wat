const axios = require("axios").default;

const apiKey = process.env.WEATHER_API_KEY;

const currentWeatherMainCities = async (req, res) => {
    try {
        const amman = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=amman&appid=${apiKey}`
        );

        const irbid = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=irbid&appid=${apiKey}`
        );

        const zarqa = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=zarqa&appid=${apiKey}`
        );

        res.json({
            status: "ok",
            data: {
                amman: amman.data,
                irbid: irbid.data,
                zarqa: zarqa.data
            }
        });
    } catch (error) {
        console.error(error);
        res.json({ status: "error" });
    }
};

const citySpecificWeather = async (req, res) => {
    const { city } = req.query;

    if (!city) {
        return res.json({ status: "error", error: "the city is empty" });
    }

    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city},jo&appid=${apiKey}`
        );

        res.json({ status: "ok", data: { city: response.data } });
    } catch (error) {
        console.error(error);
        return res.json({ status: "error", error });
    }
};

module.exports = {
    currentWeatherMainCities,
    citySpecificWeather
};
