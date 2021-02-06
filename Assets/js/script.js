//event listener for both search boxes
$("#search-btn").click(function(){
    StoreItem("cityOne", $("#searchCityOne").val())
    StoreItem("cityTwo", $("#searchCityTwo").val())
    LoadItem("cityOne")
    getFiveDay()
    
    console.log("it works i promise")
})
