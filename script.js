//event listener for both search boxes
$("#search-btn").click(function(){

    




    var cty1 = document.getElementById( "searchCityOne" );
    var cty2 = document.getElementById( "searchCityTwo" );

    var cty11 = cty1.value;
    var cty22 = cty2.value;


    console.log(cty11)
    console.log(cty22)

    StoreItem("CityOne", cty11)
    StoreItem("CityTwo", cty22)
    StoreItem("Citythree", cty11)



    LoadItem("CityOne")
    LoadItem("CityTwo")

    console.log("loaded 1 " +LoadItem("CityOne"))
    console.log("loaded 2 " +LoadItem("Citytwo"))
    console.log("loaded 2 " +LoadItem("Citythree"))
})

