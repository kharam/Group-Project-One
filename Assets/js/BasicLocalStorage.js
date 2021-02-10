
function SaveItem(ItemName1,Item2){
    localStorage.setItem(ItemName1, JSON.stringify(Item2));
}

function LoadItem(ItemName2){
    var loadItem2 = JSON.parse(localStorage.getItem(ItemName2));
return loadItem2
}


function InitItem(ItemName3,Item3){
    var loadItem3 = LoadItem(ItemName3);
    if(loadItem3 === null){
    SaveItem(ItemName3,Item3)
    return Item3
    }else{
    return loadItem3
    }
}


function Grabber(target1,target2,grabarray){


    if( target1 !== ""){
        if(NoDupes(target1,grabarray)){
        grabarray[grabarray.length] = target1
        SaveItem("StoredSearches",grabarray)
        }
    }
  
    if( target2 !== ""){
        if(NoDupes(target2,grabarray)){
        grabarray[grabarray.length] = target2
        SaveItem("StoredSearches",grabarray)
        }
    }
}





function NoDupes(item4,Inputarray4){
    var bool = true
    if(Inputarray4.includes(item4)){
        bool = false
    }
    return bool
}





function DropdownFab(target,fabarray,targetnum){
    var Div = MakeElement($("<div>"),"w3-dropdown-content w3-bar-block w3-border","Div",i,null,null,null)
    var RenderingArraying = [Div]
    var rendertarget = target
    for(var i = 0; i < fabarray.length ; i++) {
        RenderingArraying[RenderingArraying.length] = MakeElement($("<button>"),"w3-bar-item w3-button dropdown-btn","Button",i, fabarray[i],targetnum,fabarray[i])
    }

    ReRenderArea(rendertarget,RenderingArraying) 

    $(".dropdown-btn").on("click", function() {
        console.log( "searchCity" + $(this).attr("value1") )
        var idtarget = "searchCity" + $(this).attr("value1")
        var element = document.getElementById(idtarget)
        console.log(element)
        element.value = $(this).attr("value2") 
    });
}

