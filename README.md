React.JS | Test

Must init app with Create-React-App using TypeScript
Must using OpenWeatherMap API

If you need Google Maps API for geolocation you can use provided API key:
AIzaSyA9bslaj5Bl5nLuQQXe8rr_PkhDvvZqzMs

Acceptance criteria:
Displaying the current weather of the user by his location by default if the user granted location access.
Adding a city to the list by autocompleting search and save it to application settings.
Switching from Celsius to Fahrenheit by clicking on the corresponding sign, for each card separately. Should be saved as application settings.
Language switching globally for all displayed cities. Available languages are English, Ukrainian, and Russian. Should be saved as application settings. (for translation use this library https://react.i18next.com)
Displaying an icon from the OpenWeatherMap service
Using this request https://api.openweathermap.org/data/2.5/forecast?q={city_name }&appid={API_KEY} create a graph of temperature and date dependencies (using any library for plotting)
The layout of the application must be made according to the design provided

The application should store settings in LocalStorage.
For state management, you should use Redux or MobX.
