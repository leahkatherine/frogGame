
$(function(){
    $("#btnHideHat").click(function(){
      $("#showCowboyHat").collapse("hide");
    });
  
    $("#btnShowCowboyHat").click(function(){
      $("#showCowboyHat").collapse("show");
      $("#noHat").collapse("hide");
    });
  });