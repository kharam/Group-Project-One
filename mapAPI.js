var lat;
var long;
function getLatAndLong(city) {
    var apiUrl = "api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=873f7dda26b104045b059e355834d85b";
    fetch(apiUrl)
        .then(function (response) {
        if (response.ok) {
            response.json()
            .then(function (data) {
                lat = data.coord.lat;
                long = data.coord.lon;
            });
        } else {
            alert('Error: ' + response.statusText);
        }
        })
    .catch(function (error) {
      alert('Unable to connect to the API.');
    });
}

