async function getWeather() {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
    );

    const weather = await response.json();
    console.log(weather);

    // Accessing current weather data
    const currentTemperature = weather.current.temperature_2m;
    console.log("Current Temperature:", currentTemperature + "°C");

    document.querySelector(".p").innerHTML =
      "Temperature in Berlin: " + currentTemperature + "°C";

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
