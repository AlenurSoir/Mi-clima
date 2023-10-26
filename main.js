document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "49b91f56dbf11350bc2117282aa565d6"; 
  
    document.getElementById("search").addEventListener("click", function() {
      const city = document.getElementById("city").value;
      const weatherInfo = document.getElementById("weather-info");
  
      if (city === "") {
        alert("Por favor, ingrese una ciudad.");
        return;
      }
  
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          const temperature = (data.main.temp - 273.15).toFixed(2);
          const description = data.weather[0].description;
  
          weatherInfo.innerHTML = `El clima en ${city} es ${description} con una temperatura de ${temperature}°C.`;
        })
        .catch(error => {
          console.error("Error al obtener datos del clima", error);
          weatherInfo.innerHTML = "No se pudo obtener la información del clima.";
        });
    });
  });
  