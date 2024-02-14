"use strict";
let City_Input = document.querySelector(".Input_Text");
let Search_Btn = document.querySelector(".Search_Icon");
let Metric_Temperature = document.querySelector(".Number_Metric");
let Place_location = document.querySelector(".place_Weather");
let Humatity = document.querySelector(".Humanity_Celsius");
let Wind = document.querySelector(".Wind_Celsius");
var allp=document.querySelectorAll('p');
let Main_Div = document.querySelector("#Weather_Condition");
let CelsiusImg=document.querySelector(".celsisus_weather")
Search_Btn.addEventListener("click", (event) => {
    event.preventDefault();
    let cityName = City_Input.value;
    let url = "https://api.openweathermap.org/data/2.5/weather?units=metric";
    let apiKey = "1ac41d822f470089588e62f6ac6cbdce";
    fetch(url + `&appid=${apiKey}&q=${cityName}`)
        .then(response => response.json())
        .then(data => {
            let dataName = data.name;
            let dataTemp = data.main.temp;
            let dataHumanity = data.main.humidity;
            let WindTemp = data.wind.speed;
            Place_location.innerHTML = dataName;
            Metric_Temperature.innerHTML = `${dataTemp} &#8451`;
            Humatity.innerHTML = `${dataHumanity} %`;
            Wind.innerHTML = `${WindTemp} km/h`;         
            if (dataTemp > 26) {
                Main_Div.style.backgroundImage = "url('Bg-1.webp')";
                CelsiusImg.src='hot.png'
                p.style.color = "#000000";
            } else if (dataTemp >= 20 && dataTemp <= 25) {
                Main_Div.style.backgroundImage = "url('Bg-2.webp')";
                CelsiusImg.src='hot.png'
                allp.forEach((p)=>{
                    p.style.color = "#000000";
                })
            } else {
                Main_Div.style.backgroundImage = "url('Bg-3.webp')";
                allp.forEach((p)=>{
                    p.style.color = "#ffffff";
                    CelsiusImg.src='2832029.png'
                })
            }
            City_Input.value=""
        })
         if(City_Input.value == ""){
            alert('Error fetching weather data is empty');
        };
});