$(function() {
  $("#sortable").shuffle();
  var correctLocations = function() {
    var incorrect = $("#sortable").children().filter(function(i, l) {
      if("loc-" + i !== l.id)
      return true;
    })
    if(incorrect.length != 0)
      return false;
    else
      return true;
  };
  $( "#sortable" ).sortable({
    update: function(event, ui) {
      if(correctLocations()) {
        $("#result").text('Correct');
      } else {
        $("#result").text('Wrong.  Wrong!  WRONG!!!!');
      }
    }
  });
  $( "#sortable" ).disableSelection();
});

