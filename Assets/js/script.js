
//event listener for both search boxes

var SearchedCities = []
SearchedCities = InitItem("StoredSearches",SearchedCities)

$(document).ready(function() {
    
    DropdownFab( $("#searchCityDropdown1"),SearchedCities,"One" )
    DropdownFab( $("#searchCityDropdown2"),SearchedCities,"Two" )

});




$("#search-btn").click(function(){

    errorModal()
    getFiveDay()
    searchCities($("#searchCityOne").val(), $("#searchCityTwo").val());

})
