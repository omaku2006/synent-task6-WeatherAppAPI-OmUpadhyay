var isLoading = false;
var error = '';
var city = 'amreli';
var data = {};

const loader = document.getElementsByClassName('loader');

const fetchWeather = async () => {
  isLoading = true;
  if (isLoading) {
    loader[0].innerHTML = `Loading...`;
  }

  try {
    const res = await fetch(`https://wttr.in/${city}?format=j1`);
    data = await res.json();
    const tempSection = document.getElementById('tempSection');

    tempSection.innerHTML = `<h1>${data.current_condition[0].FeelsLikeC}</h1>`;
  } catch (e) {
    error = `Getting error while fetching data : ${e}`;
    weatherSection[0].innerHTML = `<h2>${error}</h2>`;
    return;
  } finally {
    isLoading = false;
  }
};

fetchWeather();
