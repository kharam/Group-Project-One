

//base variable that holds the previously searched values
var prevSearches = []

// should be called when you search cities to save them
function SearchStore(City1,City2){

    //grabs local variable and puts into local storage
    localStorage.setItem("StoredSearches", JSON.stringify(prevSearches));

}


// does the loading of the searchstore 
// should be called on init
function LoadSearchStore(City1,City2){

        //loads the stored searchs from local storage and puts it into a local variable
        var storedSearches = JSON.parse(localStorage.getItem("StoredSearches"));

        //insures that if local storage is empty it does not overwrite the main variable
        if (storedSearches !== null) {
            prevSearches = storedSearches;
        }

}
