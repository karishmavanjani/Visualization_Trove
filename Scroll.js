$(document).ready(function() {

  var div = $("#divToShowHide");

  var pos = div.position();

  $(window).scroll(function() {
    var windowpos = $(window).scrollTop();
    console.log(pos.top)
    if (windowpos > pos.top && pos.top+500 > windowpos) {
      div.addClass("AfterScroll");
       div.removeClass("BeforeScroll");
     
    } else {
       div.addClass("BeforeScroll");
      div.removeClass("AfterScroll");
     
    }
  });
});