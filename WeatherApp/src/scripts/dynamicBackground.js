import { state } from './fetchWeather';

const weatherCode = {
  // ☀️ Sunny
  113: '/sunny.jpg',

  // ⛅ Partly Cloudy
  116: '/partlyCloudy.jpg',

  // ☁️ Cloudy
  119: '/cloudy.jpg',
  122: '/cloudy.jpg',

  // 🌫️ Fog/Mist
  143: '/fog.jpg',
  248: '/fog.jpg',
  260: '/fog.jpg',

  // 🌦️ Light Rain
  176: '/lightRain.jpg',
  263: '/lightRain.jpg',
  266: '/lightRain.jpg',
  293: '/lightRain.jpg',
  296: '/lightRain.jpg',
  353: '/lightRain.jpg',

  // 🌧️ Heavy Rain
  299: '/heavyRain.jpg',
  302: '/heavyRain.jpg',
  305: '/heavyRain.jpg',
  308: '/heavyRain.jpg',
  356: '/heavyRain.jpg',
  359: '/heavyRain.jpg',

  // 🌨️ Light Snow
  227: '/lightSnow.jpg',
  320: '/lightSnow.jpg',
  323: '/lightSnow.jpg',
  326: '/lightSnow.jpg',
  368: '/lightSnow.jpg',

  // ❄️ Heavy Snow
  329: '/heavySnow.jpg',
  332: '/heavySnow.jpg',
  335: '/heavySnow.jpg',
  338: '/heavySnow.jpg',
  371: '/heavySnow.jpg',

  // 🌨️❄️ Sleet
  179: '/sleet.jpg',
  182: '/sleet.jpg',
  185: '/sleet.jpg',
  281: '/sleet.jpg',
  284: '/sleet.jpg',
  311: '/sleet.jpg',
  314: '/sleet.jpg',
  317: '/sleet.jpg',
  350: '/sleet.jpg',
  362: '/sleet.jpg',
  365: '/sleet.jpg',
  374: '/sleet.jpg',
  377: '/sleet.jpg',

  // ⛈️ Thunder
  200: '/thunder.jpg',
  386: '/thunder.jpg',
  389: '/thunder.jpg',
  392: '/thunder.jpg',
  395: '/thunder.jpg',
};

const bgImg = document.getElementById('bgImg');

export const dynamicBgImg = () => {
  const code = state.weatherData?.current_condition?.[0]?.weatherCode;

  if (!code) {
    console.log('No weather code found');
    return;
  }

  const bgNumber = Number(code);
  const imageUrl = weatherCode[bgNumber] || '/default.jpg';

  bgImg.style.backgroundImage = `url(${imageUrl})`;
  bgImg.style.backgroundSize = 'cover';
  bgImg.style.backgroundPosition = 'center';
  bgImg.style.backgroundRepeat = 'no-repeat';
};
