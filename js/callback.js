$(function(){
    $("button#hideBtn").click(function(){
        $("p").hide("slow", function(){
            alert("난 사라짐");
        })
    });
});

//자바스크립트
function myDisplayer(some){
    document.getElementById("call").innerHTML = some;
}

function myFirst(){
    myDisplayer("pjy");
}

function mySecond(){
    myDisplayer("lyh");
}
//함수는 호출할 때만 실행하는 코드블록이다.
myFirst();
mySecond();