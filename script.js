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
    tolerance: 'pointer',
    revert: 100,
    start: function(event, ui) {
      $("#red-bulb").removeClass('lit');
      $("#green-bulb").removeClass('lit');
    },
    update: function(event, ui) {
      addMove();
      if(correctLocations()) {
        $("#result").text('Done!');
        $("#green-bulb").addClass('lit');
      } else {
        $("#result").text('Not yet, keep trying!');
        $("#red-bulb").addClass('lit');
      }
    }
  });
  $( "#sortable" ).disableSelection();
});

