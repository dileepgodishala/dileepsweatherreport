//Getting weather function with API calls
function getWeather() {
     //getting city, which user entered
     var city = document.getElementById("cityName").value;
     //temperature
     var temp = document.getElementById("temperature");
     //City
     var city_data = document.getElementById("cityName1");
     //country
     var country_data = document.getElementById("country");
     //coordinates Latitude
     var coords_data_lat = document.getElementById("coords_lat");
     //coordinates Longitude
     var coords_data_lon = document.getElementById("coords_lon");
     //Temperature feel
     var tempFeel_data = document.getElementById("tempfeel");
     //Humidity
     var humidity_data = document.getElementById("humidity");
     //Pressure
     var pressure_data = document.getElementById("pressure");
     //weather_desc
     var weather_desc_data = document.getElementById("weather_desc");
     //wind_speed
     var wind_speed_data = document.getElementById("wind_speed");
     //temp view
     var scrollView = document.getElementById("tempView");
     
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=301d2f276d9a29031863f51019e118ca')
        .then(response => response.json())
        .then(data => {
            //temperature
            scrollView.scrollIntoView();
            var tempValue = data.main.temp;
            var temperature = Math.round(tempValue - 273.15);
            if(temperature>30){
                temp.innerHTML = temperature + "&#176;" + "C";
                temp.style.color = "#ff0000";
            }
            else if(temperature > 20 && temperature < 30){
                temp.innerHTML = temperature + "&#176;" + "C";
                temp.style.color = "green";
            }
            else{
                temp.innerHTML = temperature + "&#176;" + "C";
                temp.style.color = "blue";
            }
            //city
            city_data.innerHTML = data.name;
            //country
            country_data.innerHTML = data.sys.country;
            //coords_data_lat
            coords_data_lat.innerHTML = data.coord.lat;
            //coords_data_lon
            coords_data_lon.innerHTML = data.coord.lon;
            //tempFeel_data
            var tempFeel_data1 = Math.round(data.main.feels_like - 273.15);
            tempFeel_data.innerHTML = "How it feels: "+  tempFeel_data1 + "&#176;" + "C";
            //humidity_data
            humidity_data.innerHTML = data.main.humidity + "%";
            //pressure_data
            pressure_data.innerHTML = data.main.pressure + " Pascals";      
            //weather_desc_data
            weather_desc_data.innerHTML = data.weather[0].description; 
            //wind_speed_data
            wind_speed_data.innerHTML = data.wind.speed + " kmph";
        })
        .catch(err => (alert("City not found")));
        
}
function getWeatherOfLocation(city){
    //temp view
    var scrollView = document.getElementById("tempView");
    //temperature
    var temp = document.getElementById("temperature");
    //City
    var city_data = document.getElementById("cityName1");
    //country
    var country_data = document.getElementById("country");
    //coordinates Latitude
    var coords_data_lat = document.getElementById("coords_lat");
    //coordinates Longitude
    var coords_data_lon = document.getElementById("coords_lon");
    //Temperature feel
    var tempFeel_data = document.getElementById("tempfeel");
    //Humidity
    var humidity_data = document.getElementById("humidity");
    //Pressure
    var pressure_data = document.getElementById("pressure");
    //weather_desc
    var weather_desc_data = document.getElementById("weather_desc");
    //wind_speed
    var wind_speed_data = document.getElementById("wind_speed");
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=301d2f276d9a29031863f51019e118ca')
        .then(response => response.json())
        .then(data => {
            scrollView.scrollIntoView();
            //temperature
            var tempValue = data.main.temp;
            var temperature = Math.round(tempValue - 273.15);
            if(temperature>30){
                temp.innerHTML = temperature + "&#176;" + "C";
                temp.style.color = "#ff0000";
            }
            else if(temperature > 20 && temperature < 30){
                temp.innerHTML = temperature + "&#176;" + "C";
                temp.style.color = "green";
            }
            else{
                temp.innerHTML = temperature + "&#176;" + "C";
                temp.style.color = "blue";
            }
            city_data.innerHTML = data.name;
            country_data.innerHTML = data.sys.country;
            coords_data_lat.innerHTML = data.coord.lat;
            coords_data_lon.innerHTML = data.coord.lon;
            var tempFeel_data1 = Math.round(data.main.feels_like - 273.15);
            tempFeel_data.innerHTML = "How it feels: "+  tempFeel_data1 + "&#176;" + "C";
            humidity_data.innerHTML = data.main.humidity + "%";
            pressure_data.innerHTML = data.main.pressure + " Pascals";
            weather_desc_data.innerHTML = data.weather[0].description; 
            wind_speed_data.innerHTML = data.wind.speed + " kmph";
        })
        .catch(err => (alert("City not found")));
        
        
}
