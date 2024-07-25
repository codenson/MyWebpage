async function getWeather() {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=38.8951&longitude=-77.0364&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m",

    );

    const weather = await response.json();
    console.log(weather);

    // Accessing current weather data
    var currentTemperature = weather.current.temperature_2m * (9 / 5) + 32;
    currentTemperature = currentTemperature.toFixed(2);
    // console.log("Current Temperature:", currentTemperature + "°F");


    document.querySelector(".p").innerHTML =
      "Washington DC : " + currentTemperature + "°F";

    // var time = weather.current.time;

    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;


    document.querySelector(".time").textContent = "As of " + formattedDateTime;

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






