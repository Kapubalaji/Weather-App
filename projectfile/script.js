const searchInput = document.querySelector('.search input');
    const searchBtn = document.querySelector('.search button');
    const image = document.querySelector ('.icon');
    async function  getWeather(city) {
         var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b58dcb88d853197b45b3a56038ae5821&units=metric`);
         if(res.status == 404) {
            document.querySelector('.error').style.display = "block";
         } else {
            document.querySelector('.error').style.display = "none";

         }
         var data = await res.json();
         console.log(data);
         document.querySelector('.celcius').innerHTML = Math.round(data.main.temp) + "°c";
         document.querySelector('.city').innerHTML = data.name;
         document.querySelector('.humidityP').innerHTML = Math.round(data.main.humidity)  + "%";
         document.querySelector('.windS').innerHTML =Math.round(data.wind.speed)  + "km/h";

         if(data.weather[0].main == "Clouds") {
            image.src = "./img/cloud.png"
         }else if(data.weather[0].main == "Clear") {
            image.src = "./img/clear.png"
        }else if(data.weather[0].main == "Rain") {
            image.src = "./img/rain.png"
        }else if(data.weather[0].main == "Drizzle") {
            image.src = "./img/drizzle.png"
        }else if(data.weather[0].main == "Mist") {
            image.src = "./img/mist.png"
    }
}
  searchBtn.addEventListener('click', () => {
      getWeather(searchInput.value);
})