$("span:not(#cancel, #calc)").on("click",
  function(){
    $('#screen').append(
      $(this).html());
  });

$('#cancel').on("click",
  function(){
    $('#screen').html("");
  });

$('#calc').on("click",
  function(){
    $('#screen').html("answer"
      );
  });
