var nowpage = 1;
var maxpage = 7;
var prepage = 1; 


window.onload = function() {
  animation();
}

function animation() {
  setTimeout(function() {
    $(".page1").addClass("item");
    $(".page1").find("img").addClass("item");

    $(".page2").removeClass("item");
    $(".page2").find("img").removeClass("item");
  }, 6000)

  setTimeout(function() {
    $(".page2").addClass("item");
    $(".page2").find("img").addClass("item");

    $(".page3").removeClass("item");
    $(".page3").find("img").removeClass("item");
  }, 12000)

  setTimeout(function() {
    $(".page3").addClass("item");
    $(".page3").find("img").addClass("item");

    $(".page4").removeClass("item");
    $(".page4").find("img").removeClass("item");
  }, 20000)

  setTimeout(function() {
    $(".page4").addClass("item");
    $(".page4").find("img").addClass("item");

    $(".page5").removeClass("item");
    $(".page5").find("img").removeClass("item");
  }, 26000)

  setTimeout(function() {
    $(".page5").addClass("item");
    $(".page5").find("img").addClass("item");

    $(".page6").removeClass("item");
    $(".page6").find("img").removeClass("item");
  }, 32000)

  setTimeout(function() {
    $(".page6").addClass("item");
    $(".page6").find("img").addClass("item");

    $(".page7").removeClass("item");
    $(".page7").find("img").removeClass("item");
  }, 36000)
  
  setTimeout(function() {
    $(".page7").addClass("item");
    $(".page7").find("img").addClass("item");

    $(".page1").removeClass("item");
    $(".page1").find("img").removeClass("item");
  }, 42000)

  setTimeout(function() {
    animation();
  }, 48000) 
}