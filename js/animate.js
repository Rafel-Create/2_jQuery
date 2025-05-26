$(function(){ //비동기로 실행
    $("button.typoB").click(function(){
        let sec = $("section.typo");
        sec.animate({left:'100px', width: '+=100px'}, "fast");
        sec.animate({fontSize:'3rem'}, "slow")
    })

    
    $("button.timeB").click(function(){
        //비동기로 실행될 박스에 대해 변수설정을 해야 한다.
        var d = $("div.time");  //변수 div는 time이라는 클래스를 가진 div
        //아래부터가 큐
        d.animate({height: '300px', opacity: '0.4'}, "slow");  //1 
        d.animate({width: '300px', opacity: '0.8'}, "slow"); //2
        d.animate({height: '+=100px', opacity: '0.4'}, "slow"); //3
        d.animate({width: '+=100px', opacity: '0.8'}, "slow"); //4
        d.animate({borderRadius: '50%', opacity: '.9'}, "fast"); //원으로 만들기
    })



//문서가 실행되기 전에 로드 되는 것을 방지
    $("button.sh").click(function(){
        $("div.sh").animate({
            height:'toggle'
        })
    })
})

$(document).ready(function(){
//문서가 실행되기 전에 로드 되는 것을 방지
$("button.rectt").click(function(){
$("div.rect").animate({left:'250px'});
    //rect라는 클래스를 가진 div에 버튼 클릭마다 왼쪽으로 250px씩 이동하는 애니메이션을 줘라.
$("div.rect").animate({
    left:'+=250px', //+=을 쓰는 이유는 버튼을 클릭할 때마다 계속 작동하게 해주기 위함이다. 안 쓰면 처음 한 번만 작동한다. left: '+=250px'은 "현재 left 값에 250px을 더한 위치로 이동하라"는 명령
    opacity: '+=0.5',
    height: '+=150px',
    width: '+=150px',
    background: 'violet'
});
})
});