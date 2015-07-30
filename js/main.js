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
    print = equation[0].replace(/[\u00F7]/g, '/').replace(/\x/g, '*');
    answer =  eval(print).toFixed(4);
    $('#screen').html(answer);
  });

});

