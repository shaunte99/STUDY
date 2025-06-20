// Alert on start button click
document.querySelector('.start-btn').addEventListener('click', () => {
  alert("Let's start learning! 🚀");
});

// Fetch weather info from OpenWeatherMap API
async function fetchWeather() {
  try {
    const res = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Krugersdorp,ZA&appid=YOUR_API_KEY&units=metric'
    );
    if (!res.ok) throw new Error('Network response was not ok');
    const data = await res.json();
    document.getElementById("weather-info").innerText = 
      `🌤️ Weather in Krugersdorp: ${data.main.temp}°C, ${data.weather[0].main}`;
  } catch (e) {
    console.error("Weather API error:", e);
    document.getElementById("weather-info").innerText = "Weather info not available.";
  }
}

// Fetch advice from Advice Slip API
async function fetchAdvice() {
  try {
    const res = await fetch('https://api.adviceslip.com/advice');
    if (!res.ok) throw new Error('Network response was not ok');
    const data = await res.json();
    document.getElementById("advice-box").innerText = `💡 Tip: ${data.slip.advice}`;
  } catch (e) {
    console.error("Advice API error:", e);
    document.getElementById("advice-box").innerText = "Advice not available.";
  }
}

// Initialize
fetchWeather();
fetchAdvice();
