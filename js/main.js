$(document).ready(function(){

$("span:not(#cancel, #calc)").on("click",
  function(){
    $('#screen').append(
      $(this).html());
  });

$('#cancel').on("click",
  function(){
    $('#screen').html("");
  });

$('#calc').on("click", function(){
  var screenResults = $('#screen').html();
  var equation = screenResults.split();

  if($("equation:contains()")){
    var print = equation[0].replace(/\x/g, '*');
    console.log(print);
    var answer =  eval(print);
    $('#screen').html(answer);

  }else if($('equation:contains()')){
    console.log(equation);
    var print = equation[0].replace(/[\u00F7]/g, '/');
    var answer =  eval(print);
    $('#screen').html(answer);

  }else{
    var answer =  eval(print);
    $('#screen').html(answer);
  }
});



});
