
//event listener for both search boxes
$("#search-btn").click(function(){
    StoreItem("cityOne", $("#searchCityOne").val())
    StoreItem("cityTwo", $("#searchCityTwo").val())
    LoadItem("cityOne")
    getFiveDay()
    
    var cityOneName = $("#searchCityOne").val()
    var cityTwoName = $("#searchCityTwo").val()

    $(".cityNameOne").append(cityOneName);
    $(".cityNameTwo").append(cityTwoName);
})
