$(document).ready(function(){

  $(".menu").on("click", function(){
  //  $(".container").fadeOut(10);
  //  $(".container").show(10);
  $(".hidden").show();
  //$(".scam").animate({left: '250px'});

  //  $(".container").animate({"opacity":".25"},2500).animate({"opacity":"1"},2500);
  })
  $(function (){
    function runIt(){
      $(".container").animate({"opacity":".25"},1500).animate({"opacity":"1"},1500);
      $(".scam").animate({"left":"100px"},100).animate({'right':'800px'},100);
      runIt();
    }
  //  runIt();
  });


  //$(".scam").animate({left: '250px'});
});
