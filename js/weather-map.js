function appendLeadingZeroes(n){
    if(n <= 9){
        return "0" + n;
    }
    return n;
}
function dateFromTimeStamp(timeStamp) {
    let dateTime = new Date(timeStamp * 1000);
    let year = dateTime.getFullYear();
    let month = appendLeadingZeroes(dateTime.getMonth() + 1);
    let day = dateTime.getDate();
    console.log(year, month, day)
    return `${year}/${month}/${day}`;
};


    function windCardinalDirection(degrees){
    let cardinalDirection = '';
    if ((degrees > 348.75 && degrees <= 360) || (degrees >=0 && degrees <= 11.25)){
        cardinalDirection = "N";
    } else if (degrees > 11.25 && degrees  <= 33.75) {
        cardinalDirection = "NNE";
    } else if (degrees > 33.75 && degrees <= 56.25) {
        cardinalDirection = "NE";
    } else if (degrees > 56.25 && degrees <= 78.75) {
        cardinalDirection = "ENE";
    } else if (degrees > 78.75 && degrees <= 101.25) {
        cardinalDirection = "E";
    } else if (degrees > 101.25 && degrees <= 123.75) {
        cardinalDirection = "ESE";
    } else if (degrees > 123.75 && degrees <= 146.25) {
        cardinalDirection = "SE";
    } else if (degrees > 146.25 && degrees <= 168.75) {
        cardinalDirection = "SSE";
    } else if (degrees > 168.75 && degrees <= 191.25) {
        cardinalDirection = "S";
    } else  if (degrees > 191.25 && degrees <= 213.75) {
        cardinalDirection = "SSW";
    } else if (degrees > 213.75 && degrees <= 236.25)  {
        cardinalDirection = "SW";
    } else if (degrees > 236.25 && degrees <= 258.75) {
        cardinalDirection = "WSW";
    } else if (degrees > 258.75 && degrees <= 281.25) {
        cardinalDirection = "W";
    } else if (degrees > 281.25 && degrees <= 303.75) {
        cardinalDirection = "WNW";
    } else if (degrees > 303.75 && degrees <= 326.25) {
        cardinalDirection = "NW";
    } else if (degrees > 326.75 && degrees <= 348.75) {
        cardinalDirection = "NNW";
    }
    return cardinalDirection;
}

function appendLeadingZeroes(n){
    if(n <= 9){
        return "0" + n;
    }
    return n;
}

const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const daysOfMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

function formatTime(timeStamp){
    let dateTime = new Date(timeStamp * 1000);
    let year = dateTime.getFullYear();
    let month = months[dateTime.getMonth()];
    let day = dateTime.getDate();
    let hour = appendLeadingZeroes(dateTime.getHours());
    let minutes = appendLeadingZeroes(dateTime.getMinutes());
    let seconds = appendLeadingZeroes(dateTime.getSeconds());
    return month + " " + day + " " + year + " " + hour + ":" + minutes + ":" + seconds;
}

function dateFromTimeStamp(timeStamp){
    let dateTime = new Date(timeStamp * 1000);
    let year = dateTime.getFullYear();
    let month = appendLeadingZeroes(dateTime.getMonth() + 1);
    let day = dateTime.getDate();
    return `${month}-${day}`;
}

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const daysOfWeekAbbreviated = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function namedDayFromDay(timeStamp){
    let dateTime = new Date(timeStamp * 1000);
    return daysOfWeek[dateTime.getDay()];
}

function dayOfWeekFromDayAbbreviated(timeStamp){
    let dateTime = new Date(timeStamp * 1000);
    return daysOfWeekAbbreviated[dateTime.getDay()];
}

function mostFrequent(array){
    const arrayElementsCount = array.reduce(function(total, element){
        if (!total[element]) {
            total[element] = 1;
        } else {
            total[element] = total[element] + 1;
        }
        return total;
    }, {});
    const arraySorted = Object.entries(arrayElementsCount).sort(function(a, b){
        return b[1] - a[1];
    });
    return arraySorted[0][0];
}

function average(array){
    let total = 0;
    array.forEach((element, index, array)=>total+=element);
    return total/array.length;
}






// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: OPEN_WEATHER_APPID,
//     q:     "San Antonio, US"
// }).done(function(data) {
//     console.log(data);
// });

//TODAYS SA WEATHER
const SAlon = -98.48527;
const SAlat = 29.423017;
$.get(`https://api.openweathermap.org/data/2.5/weather?lat=${SAlat}&lon=${SAlon}&appid=${OPEN_WEATHER_APPID}&units=imperial`).done
(data=>{
//     console.log(data);
// console.log(`The temp is:` + data.main.temp)
    const time = new Date();
    // console.log(months[time.getMonth()]);
    // console.log(daysOfWeek[time.getDay()]);
    // console.log(time.getDate());
    // console.log(time.getHours());
    // console.log(appendLeadingZeroes(time.getMinutes()));
    $('#todaysDate').html(`<p>${daysOfWeek[time.getDay()]}<br>${months[time.getMonth()]}  ${time.getDate()}  ${time.getHours()}:${appendLeadingZeroes(time.getMinutes())}<br> Location: ${data.name}</p>`)
    $('#weather').html(`<p>Weather: ${data.weather[0].description}<br>Current Temp: ${data.main.temp}<br>Feel like temp: ${data.main.feels_like}</p>`)
    $('#details').html(`<p>Humidity: ${data.main.humidity}<br>Today's High: ${data.main.temp_max}<br>Today's Low: ${data.main.temp_min}</p>`)
});

// $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${SAlat}&lon=${SAlon}&appid=${OPEN_WEATHER_APPID}&units=imperial`).done(data=>{
//     console.log(data);
//     data.list.forEach(forecast =>{
//         console.log(forecast.dt_txt);
//         console.log(forecast.weather[0].description)
//     })
// });





$.get(`https://api.openweathermap.org/data/2.5/forecast?`, {
    APPID: OPEN_WEATHER_APPID,
    lat: SAlat,
    lon: SAlon,
    units: "imperial"
}).done(function(data) {
    console.log(data);
    let fiveDayForecast = '';
    data.list.forEach((forecast, index) =>{
        if (index % 8 === 0 && index !==0) {
            const time = new Date(forecast.dt * 1000);
            // console.log(time.getHours());
            console.log(time.getTime());
            console.log(time.getDay());
            console.log(forecast.dt_txt);
            console.log(forecast.weather[0].description);
            console.log(forecast.main.temp);
            fiveDayForecast +=  `
                            <div class="forecast" id="day${index}">
                              
                              ${daysOfWeekAbbreviated[time.getDay()]}<br>${dateFromTimeStamp(forecast.dt)}<br>${forecast.weather[0].description}<br>${forecast.main.temp}
                            </div>
                            `;

            // $('#tomorrowDate').html(`${daysOfWeekAbbreviated[time.getDay()]}<br></br>${dateFromTimeStamp(forecast.dt)}`)
            // // (`<p>${daysOfWeekAbbreviated[time.getDay()]}<br>${months[time.getMonth()]}  ${time.getDate()}<br>Location: ${data.city.name}</p>`)
            // // $('#tomorrowDate').html(`<p>${forecast.weather[0].description}<br>${forecast.dt_txt}`)
            // $('#tomorrowTemp').html(`<p>Weather: ${data.list[4].weather[0].description} High: ${data.list[4].main.temp_max}<br>Low: ${data.list[4].main.temp_min}</p>`)
            // // $('#tomorrowMax').html(`<p>Humidity: ${data.main.humidity}<br>Today's High: ${data.main.temp_max}<br>Today's Low: ${data.main.temp_min}</p>`)
        }
    })
    $('.fivedayForecastBox').html(fiveDayForecast);
});



document.getElementById("zoomSubmit").addEventListener('click', event => {
    event.preventDefault();
    map.setZoom(document.getElementById("zoom").value);
});

document.querySelector("#searchAddress").addEventListener('click', event=>{
    // get the value of the input
    // save the return of the geocode function -- it should be an array with lat/long
    // use map.flyTo method
    // save return of a  function that gets openweather forecast
    // run a function that updates the forecast in the dom, using the return from openweather
})


document.querySelector("#searchAddress").addEventListener('click', event=>{
    document.querySelectorAll(".mapboxgl-marker").forEach(svg=>{
        svg.style.display = 'none';
    })
})
document.getElementById("setMarkerButton").addEventListener('click', async (event)=>{
    event.preventDefault();
    const address = document.getElementById("setMarker").value;
    let coords = await geocode(address, MAPBOX_API_TOKEN);
    const newMarker = new mapboxgl.Marker()
        .setLngLat(coords)
        .addTo(map);
    // map.setCenter(coords);

    map.flyTo({
        center: coords,
        zoom: 7,
        speed: 1,
        curve: 1,
        easing(t) {
            return t;
        }
    });
});

