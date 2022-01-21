const API_KEY = "4824cad07a82083ae994502a5f89fe82";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()) // fetch() -> Promise
    .then((result) => {
        const climate = document.querySelectorAll("#weather span");
        climate[0].innerText = `${result.main.temp}°C`;
        climate[1].innerText = `${result.weather[0].main}`;
        climate[2].innerHTML = `<img src='http://openweathermap.org/img/w/${result.weather[0].icon}.png'>`;
        climate[3].innerText = `${result.name}`;
    })
    .catch(error => console.log(error));
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);