var modal = $("#errorModal");

$(".close").on("click", function() {
    $(modal).css("display","none")
})

function errorModal() {
    if ($("#searchCityOne").val() == "") {
        $(modal).css("display","block")
        return
    }
    else if ($("#searchCityTwo").val() == "") {
        $(modal).css("display","block")
        return
    }
    else return

}

function APIErrorModal() {
    $(modal).css("display","block")
    return
}



