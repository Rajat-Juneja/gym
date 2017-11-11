$(window).scroll(function(){
    var scrollPos = $(window).scrollTop();
    if (scrollPos == 0){
        $(".top").css("visibility","hidden");
        $(".bottom").css("visibility","visible");
    }
    else {
        $(".top").css("visibility","visible");
        $(".top").css("position","fixed");
        $(".bottom").css("visibility","hidden");
    }
});



window.addEventListener("load",init);

var nav;
var play;
 
function init(){
    nav = document.getElementsByClassName("hideit");
    play = document.getElementsByClassName("play");
    console.log(nav[1]);
    console.log(play[1]);
    play[0].addEventListener("click",hide);
    play[1].addEventListener("click",show);
}


function hide(){
     nav[1].classList.toggle("show");
//     nav[1].css("display","fixed");
    
}

function show(){
    nav[1].classList.toggle("show");
//    nav[1].css("display","fixed");
}