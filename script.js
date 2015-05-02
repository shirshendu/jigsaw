$(function() {
  $("#sortable").shuffle();
  var moves = 0;
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
  var addMove = function () {
    moves += 1;
    $("#moves").text(moves);
  };
  $( "#sortable" ).sortable({
    update: function(event, ui) {
      addMove();
      if(correctLocations()) {
        $("#result").text('Correct');
      } else {
        $("#result").text('Wrong.  Wrong!  WRONG!!!!');
      }
    }
  });
  $( "#sortable" ).disableSelection();
});

