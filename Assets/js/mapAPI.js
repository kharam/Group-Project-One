var lat;
var long;
var mymap;
function getLatAndLong(city, theId) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=873f7dda26b104045b059e355834d85b";
    fetch(apiUrl)
        .then(function (response) {
        if (response.ok) {
            response.json()
            .then(function (data) {
                lat = data.coord.lat;
                long = data.coord.lon;
                mymap = L.map(theId).setView([lat, long], 13);
                L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGFuY29uZyIsImEiOiJja2tveGoxMXgwMXloMnNxa2oybm5pc25sIn0.hp-Jq2bPDmlRSluu-dXp-g', {
                    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 18,
                    id: 'mapbox/streets-v11',
                    tileSize: 512,
                    zoomOffset: -1,
                    accessToken: 'your.mapbox.access.token'
                }).addTo(mymap);
            });
        } else {
            APIErrorModal();
        }
        })
    .catch(function (error) {
    console.log('Unable to connect to the API.');
    });
}
$(document).ready(function() {
    $("#search-btn").click(function() {
        var container = L.DomUtil.get('mapid');
        var container2 = L.DomUtil.get('mapid2');
        if(container != null && container2 != null){
            container._leaflet_id = null;
            container2._leaflet_id = null;
        }
        getLatAndLong($("#searchCityOne").val(), "mapid");
        getLatAndLong($("#searchCityTwo").val(), "mapid2");
    });
});