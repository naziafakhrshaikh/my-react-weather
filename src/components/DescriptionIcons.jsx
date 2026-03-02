import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiCloud,
  WiCloudy,
  WiRain,
  WiSprinkle,
  WiThunderstorm,
  WiSnow,
  WiSleet,
  WiFog,
} from "react-icons/wi";

// Mapping weather types to React Icons with natural colors
const weatherIconMap = {
  Clear: {
    day: <WiDaySunny size={50} color="#FFD700" />,      
    night: <WiNightClear size={50} color="#F0E68C" />,  
  },
  Clouds: {
    day: <WiDayCloudy size={50} color="#B0C4DE" />,     
    night: <WiNightAltCloudy size={50} color="#708090" />, 
  },
  Rain: {
    day: <WiRain size={50} color="#1E90FF" />,          
    night: <WiRain size={50} color="#1E90FF" />,
  },
  Drizzle: {
    day: <WiSprinkle size={50} color="#00BFFF" />,      
    night: <WiSprinkle size={50} color="#00BFFF" />,
  },
  Thunderstorm: {
    day: <WiThunderstorm size={50} color="#FFA500" />,  
    night: <WiThunderstorm size={50} color="#FFA500" />,
  },
  Snow: {
    day: <WiSnow size={50} color="#00FFFF" />,          
    night: <WiSnow size={50} color="#00FFFF" />,
  },
  Mist: {
    day: <WiFog size={50} color="#A9A9A9" />,           
    night: <WiFog size={50} color="#A9A9A9" />,
  },
  Smoke: {
    day: <WiFog size={50} color="#888888" />,
    night: <WiFog size={50} color="#888888" />,
  },
  Haze: {
    day: <WiFog size={50} color="#AAAAAA" />,
    night: <WiFog size={50} color="#AAAAAA" />,
  },
  Dust: {
    day: <WiFog size={50} color="#D2B48C" />,
    night: <WiFog size={50} color="#D2B48C" />,
  },
  Fog: {
    day: <WiFog size={50} color="#B0B0B0" />,
    night: <WiFog size={50} color="#B0B0B0" />,
  },
  Sand: {
    day: <WiFog size={50} color="#DEB887" />,
    night: <WiFog size={50} color="#DEB887" />,
  },
  Ash: {
    day: <WiFog size={50} color="#A0522D" />,
    night: <WiFog size={50} color="#A0522D" />,
  },
  Squall: {
    day: <WiCloudy size={50} color="#708090" />,
    night: <WiCloudy size={50} color="#708090" />,
  },
  Tornado: {
    day: <WiThunderstorm size={50} color="#FF4500" />, // red-orange
    night: <WiThunderstorm size={50} color="#FF4500" />,
  },
  WiSleet:{
    day: <WiSleet size={50} color="#00FFFF" />,          
    night: <WiSleet size={50} color="#25a0a0ff" />,
},
  WiCloud:{
    day: <WiCloud size={50} color="#00FFFF" />,          
    night: <WiCloud size={50} color="#0d7e9dff" />,
},
};

function DescriptionIcons({ main, iconCode }) {
  // Determine day or night using OpenWeather icon code
  const isDay = iconCode?.endsWith("d");
  const variant = isDay ? "day" : "night";

  // Use React Icon if available
  if (weatherIconMap[main]) {
    return weatherIconMap[main][variant];
  }

  // Fallback to OpenWeather PNG if React Icon is missing
  return (
    <img
      src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
      alt={main}
      style={{ width: 50, height: 50 }}
    />
  );
}


export { DescriptionIcons };