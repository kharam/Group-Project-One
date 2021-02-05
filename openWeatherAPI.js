// getFiveDay()

//parameter should be the name of the city searched

function getFiveDay() {
    let searchCityOne = $("#searchCityOne").val()
    console.log(searchCityOne)
    let searchCityTwo = $("#searchCityTwo").val()
    let forecastOne = $("#forecastOne")
    console.log(forecastOne)
    let forecastTwo = $("#forecastTwo")
    let sourceArray = [searchCityOne, searchCityTwo]
    let weatherTargetingArray = [forecastOne, forecastTwo]
    let loop = 0

    while (loop < sourceArray.length) {

        var requestForecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + sourceArray[loop] + "&units=imperial&apikey=09a0aab280840ec6d582b6d7445e4771";
        fetch(requestForecastUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data)
                var numberOfDays = 5
                var index = 0
                for (var i = 0; i < numberOfDays; i++) {
                    var forecastCard = $(`
                    <div class="w3-card w3-mobile forecastCard">
                        <p>${dayjs(data.list[index].dt_txt).format('M/D/YYYY')}</p>
                        <img src="http://openweathermap.org/img/wn/${data.list[index].weather[0].icon}@2x.png" class="iconImage">
                        <p>Temp: ${data.list[index].main.temp} ºF</p>
                        <p>Humidity: ${data.list[index].main.humidity}%</p>
                    </div>`)
                    weatherTargetingArray[loop].append(forecastCard)
                    index += 8
                }
            })
    loop++;
    }
}