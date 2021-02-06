function getFiveDay() {
    let searchCityOne = $("#searchCityOne").val()
    let searchCityTwo = $("#searchCityTwo").val()
    let forecastOne = $("#forecastOne")
    let forecastTwo = $("#forecastTwo")
    let sourceArray = [searchCityOne, searchCityTwo]
    let weatherTargetingArray = [forecastOne, forecastTwo]
    console.log(weatherTargetingArray)
    let loop = 0 

    //Clears 5 day forecast divs
    clearWeather();
    printHeaders()

    //Gets API data
    function getForecastData(city) {
        return fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&apikey=09a0aab280840ec6d582b6d7445e4771")
            .then(res => {
                console.log('fetch res: ', res)
                return res.json()
            })
    }

    //Puts source array data into promise
    const fetchCallPromises = []
    for (var k = 0; k < sourceArray.length; k++) {
        fetchCallPromises.push(getForecastData(sourceArray[k]))
    }

    //Promise to loop through the data and add the cards before moving onto other actions
    console.log(fetchCallPromises)
    Promise.all(fetchCallPromises)
        .then((data) => {
            console.log('data: ', data)
            for (var i = 0; i < data.length; i++) {
                var numberOfDays = 5
                var index = 0
                for (var j = 0; j < numberOfDays; j++) {
                    console.log(data[i].list)
                    var forecastCard = `
                    <div class="w3-card w3-mobile forecastCard">
                        <p>${dayjs(data[i].list[index].dt_txt).format('M/D/YYYY')}</p>
                        <img src="http://openweathermap.org/img/wn/${data[i].list[index].weather[0].icon}@2x.png" class="iconImage">
                        <hr>
                        <p>Temp: ${data[i].list[index].main.temp} ºF</p>
                        <p>Humidity: ${data[i].list[index].main.humidity}%</p>
                    </div>`
                    console.log(forecastCard)
                    console.log(weatherTargetingArray)
                    $(weatherTargetingArray[i]).append(forecastCard)
                    index += 8
                }
            }
        })
        .catch((err) => {
            console.log('err:', err)
        })
}

//clear weather data function
function clearWeather() {
    $("#forecastOne").html("");
    $("#forecastTwo").html("");
}

function printHeaders(){
    console.log(searchCityOne)
    $("#cityNameHeaderOne").text($("#searchCityOne").val())
    $("#cityNameHeaderTwo").text($("#searchCityTwo").val())
}