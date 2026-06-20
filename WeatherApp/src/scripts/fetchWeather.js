export const state = {
  isLoading: false,
  error: null,
  city: 'kolkata',
  weatherData: null,
};

export const fetchWeather = async () => {
  state.isLoading = true;
  await new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    const res = await fetch(`https://wttr.in/${state.city}?format=j1`);
    if (!res.ok) state.error = `Getting Error while Fetchong Data : ${res.status}`;
    const text = await res.text();

    if (text.toLowerCase().includes('location not found')) {
      state.error = 'Location not found';
    }

    const data = JSON.parse(text);

    state.weatherData = data;
  } catch (e) {
    state.error = `Getting error while fetching data : ${e}`;
  } finally {
    state.isLoading = false;
  }
};
