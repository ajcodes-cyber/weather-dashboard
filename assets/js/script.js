function getInfo() {
    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--";

    fetch("http://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=efdd3491500955b39f293ff6b769d949")
    .then(response => response.json())
    .then(data =>{
        for(i=0; i<5; i++) {
            document.getElementById("day" +(i+1)+"Min").innerHTML = "Min:" +Number(data.list[i].main.temp_min -300.52).toFixed(1)+"°";
        }
        for(i=0; i<5; i++) {
            document.getElementById("day" +(i+1)+"Max").innerHTML = "Max:" +Number(data.list[i].main.temp_max -300.52).toFixed(1)+"°";
        }
        for (i=0; i<5; i++) {
            document.getElementById("img" +(i+1)).src ="http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
        }
    })

// Catch method will display the error just in case
.catch(err => alert("Something went wrong"));
}

var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function checkDay(day) {
    if (day +d.getDay() > 6) {
        return day +d.getDay()-7;
    } else {
        return day +d.getDay();
    }
}