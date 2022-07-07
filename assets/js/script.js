function getInfo() {
    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--";
}

fetch("http://api.openweathermap.org/data/2.5/forecast?q=dallas&appid=efdd3491500955b39f293ff6b769d949")