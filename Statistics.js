$(function()
{
    $(".nav .dropdownGender").hover(function(arg) {
        $("#dropdown-gender").fadeIn("slow");
    }, function(arg) {
        $("#dropdown-gender").fadeOut("fast");
    });

    $(".nav .dropdownAge").hover(function(arg) {
        $("#dropdown-age").fadeIn("slow");
    }, function(arg) {
        $("#dropdown-age").fadeOut("fast");
    });

    $(".nav .dropdownEthnicity").hover(function(arg) {
        $("#dropdown-ethnicity").fadeIn("slow");
    }, function(arg) {
        $("#dropdown-ethnicity").fadeOut("fast");
    });

    $(".nav .dropdownCountry").hover(function(arg) {
        $("#dropdown-country").fadeIn("slow");
    }, function(arg) {
        $("#dropdown-country").fadeOut("fast");
    });
});

$("#male").click(function(){
    $("p").text("Male statistics: ");
});
