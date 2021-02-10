function getFiveDay() {
    let searchCityOne = $("#searchCityOne").val()
    let searchCityTwo = $("#searchCityTwo").val()
    let forecastOne = $("#forecastOne")
    let forecastTwo = $("#forecastTwo")
    let sourceArray = [searchCityOne, searchCityTwo]
    let weatherTargetingArray = [forecastOne, forecastTwo]
    let loop = 0 

    //Clears 5 day forecast divs
    clearWeather();

    //Gets API data
    function getForecastData(city) {
        return fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&apikey=09a0aab280840ec6d582b6d7445e4771")
            .then(res => {
                return res.json()
            })
    }

    //Puts source array data into promise
    const fetchCallPromises = []
    for (var k = 0; k < sourceArray.length; k++) {
        fetchCallPromises.push(getForecastData(sourceArray[k]))
    }

    //Promise to loop through the data and add the cards before moving onto other actions
    Promise.all(fetchCallPromises)
        .then((data) => {
            for (var i = 0; i < data.length; i++) {
                var numberOfDays = 5
                var index = 0
                for (var j = 0; j < numberOfDays; j++) {
                    var forecastCard = `
                    <div class="w3-card w3-col forecastCard">
                            <p>${dayjs(data[i].list[index].dt_txt).format('M/D/YYYY')}</p>
                            <img src="http://openweathermap.org/img/wn/${data[i].list[index].weather[0].icon}@2x.png" class="iconImage">
                            <hr>
                            <p>Temp: ${data[i].list[index].main.temp} ºF</p>
                            <p>Humidity: ${data[i].list[index].main.humidity}%</p>
                    </div>`
                    $(weatherTargetingArray[i]).append(forecastCard)
                    index += 8
                }
            }
        })
        .catch((err) => {
            console.log('err:', err)
        })
    //Adds city names to headers.
    printHeaders()
}

//clear weather data function
function clearWeather() {
    $("#forecastOne").html("");
    $("#forecastTwo").html("");
}

function printHeaders(){
    $("#cityNameHeaderOne").text($("#searchCityOne").val())
    $("#cityNameHeaderTwo").text($("#searchCityTwo").val())
}