function getInfo() {
    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--";
}

fetch("http://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=efdd3491500955b39f293ff6b769d949")
.then(response => response.json())
.then(data =>{
    for(i = 0; i < 5; i++) {
        document.getElementById("day" +(i+1)+"Min").innerHTML = "Min:" +Number(data.list[i].main.temp_min -300.52).toFixed(1)+"°";
    }
    for(i = 0; i < 5; i++) {
        document.getElementById("day" +(i+1)+"Max").innerHTML = "Max:" +Number(data.list[i].main.temp_max -300.52).toFixed(1)+"°";
    }
})