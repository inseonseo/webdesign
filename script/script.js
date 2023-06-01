
$(function(){

// 로고 클릭 시 콘텐츠 최상단 위치
 $(".logo").on("click", function() {
    $("html, body").animate({
        scrollTop: 0
    }, 400); //0.4초
 });

// 화살표 클릭 시 콘텐츠 최상단 위치
$(".btn_logo").on("click", function() {
    $("html, body").animate({
        scrollTop: 0
    }, 400); //0.4초
 });


// 화살표 버튼, 스크롤 500픽셀 도달시 나타남
$(window).scroll(function(){
    if($(this).scrollTop()>500){
        $(".btn_top").fadeIn();
    }else{
        $(".btn_top").fadeOut();
    }
});

// 각 메뉴 클릭 시 애니메이션으로 해당 콘텐츠에 위치시킴
var menu = $(".menu>ul>li");
var con = $("#contents>div");
// #contents > div => #a1~#a5
menu.click(function(){
    var tg=$(this); // <== 클릭 이벤트가 일어난 li(menu) 클릭일어난 걸 tg에 넣어놓은 것, 일어난 메뉴
    var i = tg.index(); //클릭 일어난 메뉴 순서값 구래서 인덱스 앞에 i 쓴 것
    var section = con.eq(i); //i는 클릭이라는 이벤트가 일어난 순서값, 섹션에 콘텐츠와 메뉴 순서값 일치시킨 것
    var toP = section.offset().top;
    $("html, body").animate({
        scrollTop:toP
    })
});



// .offset() - 전체 문서를 기준으로 선택한 요소 가로, 세로 떨어진 위치 좌표값 변경 시 사용
//.scroll() - 이벤트 메서드인데, 스크롤바가 이동할때마다 이벤트 발생
// .scrollTop() - 브라우저에 스크롤바가 수직, 수평으로 이동한 위치값 불러오거나 변경할 때 사용
// .eq() - 지정한 변수만 선택


});















