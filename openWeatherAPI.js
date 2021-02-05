function getFiveDay() {
    let searchCityOne = $("#searchCityOne").val()
    console.log(searchCityOne)
    let searchCityTwo = $("#searchCityTwo").val()
    let forecastOne = $("#forecastOne")
    console.log(forecastOne)
    let forecastTwo = $("#forecastTwo")
    let sourceArray = [searchCityOne, searchCityTwo]
    let weatherTargetingArray = [forecastOne, forecastTwo]
    console.log(weatherTargetingArray)
    let loop = 0

    function getForecastData(city) {
        return fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&apikey=09a0aab280840ec6d582b6d7445e4771")
            .then(res => {
                console.log('fetch res: ', res)
                return res.json()
            })
    }

    const fetchCallPromises = []
    for (var k = 0; k < sourceArray.length; k++) {
        fetchCallPromises.push(getForecastData(sourceArray[k]))
    }

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