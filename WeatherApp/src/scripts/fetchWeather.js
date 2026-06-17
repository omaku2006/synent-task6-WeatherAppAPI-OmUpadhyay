export const state = {
  isLoading: false,
  error: null,
  city: 'amreli',
  weatherData: null,
};

export const fetchWeather = async () => {
  state.isLoading = true;
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    const res = await fetch(`https://wttr.in/${state.city}?format=j1`);
    if (!res.ok) state.error = `Getting Error while Fetchong Data : ${res.status}`;
    state.weatherData = await res.json();
  } catch (e) {
    state.error = `Getting error while fetching data : ${e}`;
  } finally {
    state.isLoading = false;
  }
};
