// Display.jsx
import "./App.css";
import { useState } from "react";
import { getWeather } from "../Services/weatherService";
import { WiThermometer, WiCloud, WiHumidity, WiStrongWind,} from "react-icons/wi";
import { DescriptionIcons } from "./DescriptionIcons";

const Display = () => {
  const [searchCity, setSearchCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const isDay = weather?.weather?.[0]?.icon?.endsWith("d");

  const handleClick = async () => {
  try {
    setError("");
    const data = await getWeather(searchCity);
    setWeather(data);
  } catch (err) {
    setWeather(null);
    setError(err.message);
  }
};

  return (
    <div className="display-container">
      <h2>Check Out Mood Of The Sky</h2>
        
      <input
        type="text"
        placeholder="Enter City Name"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
      />

      <button className="get-weather-btn" onClick={handleClick}>
        Get Weather
      </button>
      {/* to display error message */}
      {error && <p className="error-message">{error}</p>}

     {weather && (
     <>
    {/* Temperature card */}
          <div className="weather-card">
            <WiThermometer size={50} color= "#1E3B3E" className="temp-icon" />
            <h3>{weather.name}, {weather.sys.country}</h3>
            {/* Time */}
            {/* Daytime or Night time? */}
            <p>{isDay ? "Daytime" : "Nighttime"}</p>
            <p>Local Time: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>

            {/* Temperature */}
            <h1 className="temp">{weather.main.temp}°F</h1>
            
            <div className="min-max-feels">
            <p>Max: {weather.main.temp_max}°F</p>
            <p>Min: {weather.main.temp_min}°F</p>
            <p>Feels Like: {weather.main.feels_like}°F</p>
          </div>
          </div>
    
          {/* Discription Card */}
          <div className="weather-card small-card">
          <DescriptionIcons main={weather.weather[0].main} iconCode={weather.weather[0].icon} />
          <p>{weather.weather[0].main}</p>
          <p>{weather.weather[0].description}</p>
          </div>

          {/* Wind Card */}
          <div className="weather-card small-card">
            <WiStrongWind size={40} color="#4682B4" />
            <p>Wind Speed: {weather.wind.speed}%</p>
          </div>
          
          {/* Cloudiness Card */}
          <div className="weather-card small-card">
            <WiCloud size={40} color= "#1E3B3E" />
            <p>Cloudiness: {weather.clouds.all}%</p>
          </div>

          {/* Humidity Card */}
          <div className="weather-card small-card">
            <WiHumidity size={40} color= "#1E3B3E"/>
            <p>Humidity: {weather.main.humidity}%</p>            
          </div>

        </>
        // end of empty div block
      )}
      {/* end of if weather then display all this data */}
    </div>
    // end of display container div
  );
  // end of return
};
// end of function

export default Display;