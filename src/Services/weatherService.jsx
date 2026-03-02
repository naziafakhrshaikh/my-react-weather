const apiKey = import.meta.env.VITE_WEATHER_API;

export const getWeather = async (city) => {
  if (!city.trim()) {
    throw new Error("City name cannot be empty.");
  }

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
  );

  const data = await response.json();

  // OpenWeather-specific error handling
  if (data.cod === "404" || data.cod === 404) {
    throw new Error("City not found. Please enter a valid city.");
  }

  return data;
};