// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

  
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=7e5dfb1d77e3e16bc5cd6b1fa8804995';


async function apiFetch() {
   
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // testing only
        displayResults(data); // uncomment when ready
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log('Fetch Error:', error);
    }
  }
  
  // Function to display weather data on the HTML page
  function displayResults(data) {
    // Display current temperature
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;

    const iconCode = data.weather[0].icon;

    const iconsrc = `https://openweathermap.org/img/w/${iconCode}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    captionDesc.textContent = desc;
  }
  apiFetch();


  