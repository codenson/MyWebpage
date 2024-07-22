async function getWeather() {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=38.8951&longitude=77.0364&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
      //"https://api.open-meteo.com/v1/forecast?latitude=38.9072&longitude=77.0369&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
      // "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
    );

    const weather = await response.json();
    console.log(weather);

    // Accessing current weather data
    const currentTemperature = weather.current.temperature_2m;
    console.log("Current Temperature:", currentTemperature + "°C");

    document.querySelector(".p").innerHTML =
      "Berlin: " + currentTemperature + "°C";

    var time = weather.current.time;
    document.querySelector(".time").textContent = "As of " + time;

    var windSpeed = weather.current.wind_speed_10m;
    document.querySelector(".windSpeed").textContent =
      "Wind Speed: " + windSpeed + " m/s";
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

getWeather();

async function fetchBitcoinLatestPrice() {
  const headers = { 'X-CoinAPI-Key': '61F81EC0-A2B1-40C4-8559-A2D1AD0D0A34' };
  const URL = "https://rest.coinapi.io/v1/exchangerate/btc/usd";

  try {
    const response = await fetch(URL, { headers: headers });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    var price = Math.round(data.rate);

    document.querySelector(".btc").textContent = "BTC: $" + price;

  } catch (error) {
    console.error("Error fetching Bitcoin price:", error);
  }
}

fetchBitcoinLatestPrice();






