const API_KEY = "4824cad07a82083ae994502a5f89fe82";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()) // fetch() -> Promise
    .then((result) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `날씨: ${result.weather[0].main} 온도: ${result.main.temp}`;
        city.innerText = `지역: ${result.name}`;
    })
    .catch(error => console.log(error));
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);