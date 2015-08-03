$(document).ready(function(){
//makes button values appear on screen
  $("span:not(#cancel, #calc, .operator)").on("click",
    function(){
      $('#screen').append(
        $(this).html());
    });
//puts spaces around operators
  $(".operator:not(#calc)").on("click",
    function(){
      $('#screen').append(
        " " + $(this).html()+ " ");
    });

//clears screen on cancel
  $('#cancel').on("click",
    function(){
      $('#screen').html("");
    });

//calculates on = button
  $('#calc').on("click", function(){
    var screenResults = $('#screen').html();
    var equation = screenResults.split(" ");
    $('#screen').html(calculateValue(equation).toFixed(4));
    });

});

//calculate function
function calculateValue (equation){
  var num1 = parseInt(equation[0]);
  var operator = equation[1];
  var num2 = parseInt(equation[2]);

  switch(operator) {
    case "+":
        return num1 + num2;
    case "-":
        return num1 - num2;
    case "*":
        return num1 * num2;
    case "\u00F7":
        return num1 / num2;
    default:
        return "error";
  }
}
