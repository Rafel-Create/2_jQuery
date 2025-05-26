$(function(){
    $("#flip").click(function(){
        $("#panel").slideDown(5000);
    });
    //동작을 멈출때
    $("#stop").click(function(){
$("#panel").stop();
    });
})