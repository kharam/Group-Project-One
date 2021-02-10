






function StoreItem(ItemName,Item){
    localStorage.setItem(ItemName, JSON.stringify(Item));
    console.log(ItemName)
}



function LoadItem(ItemName){
    var LoadItem = JSON.parse(localStorage.getItem(ItemName));
    return LoadItem
}




function StorageInit(ItemName,Item){
    var LoadItem = JSON.parse(localStorage.getItem(ItemName));
    if(LoadItem === null){
    StoreItem(ItemName,Item)
    return Item
    }else{
    return LoadItem
    }
}







function StoreageRefresh(){
    var LocalCityStorage = []
    LocalCityStorage = StorageInit("SearchedCities",LocalCityStorage)  

    if( $("#searchCityOne").val() !== ""){
        LocalCityStorage[LocalCityStorage.length] = $("#searchCityOne").val()
    }

    if($("#searchCityOne").val() !== ""){
        LocalCityStorage[LocalCityStorage.length] = $("#searchCityTwo").val()
    }

    StoreItem("SearchedCities",LocalCityStorage)   

    LocalCityStorage = LoadItem("SearchedCities")   

    $("#SearchDropdown").empty();

    
    


    for(var i = 0; i < LocalCityStorage.length; i++) {


        $("#SearchDropdown").append(LocalCityStorage[i]);
    }

}