async function getWeather() {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=38.8951&longitude=77.0364&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
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

  const apiKey = "8c8e027e046e9f37339663916aa2ba99bb24e6d0a5bba2975f81245a77f508b9";
  const URL = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR&api_key=" + apiKey;

  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const price = "BTC: " + data.USD;
    document.querySelector(".btc").textContent = price;

  } catch (error) {
    document.querySelector(".btc").textContent = "BTC Price: N/A";
  }
}

fetchBitcoinLatestPrice();






