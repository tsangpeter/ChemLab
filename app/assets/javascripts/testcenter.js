$(function () {
  $(".square").draggable({
    snap: ".squaredotted",
    snapMode: "inner"
  });
});

$(function() {
  // $( "#draggable" ).draggable();
  $( ".squaredotted" ).droppable({
    accept: "#hydrogen", 
    over: function (event, ui) {
      $( this )
      // .addClass( "ui-state-highlight" )
      .find( "p" )
      .html( ".")
      .css('background-image', "url('assets/hydrogenR.png')");
    },
      out: function (event, ui) {
        $( this )
        // .addClass( "ui-state-highlight" )
        .find( "p" )
        .css('background-image', "url('assets/empty.png')");
      }      
  });
});

$(function() {
  $( "#five" ).droppable({
    accept: "#oxygen", 
      over: function (event, ui) {
       $( this )
       .find( "p" )
       .html( ".")
       .css('background-image', "url('assets/oxygenV.png')");
      },
      out: function (event, ui) {
       $( this )
       .find( "p" )
       .css('background-image', "url('assets/empty.png')");
      }      
  });
});

$(function() {
  $( "#six" ).droppable({
    accept: "#hydrogen2", 
      over: function (event, ui) {
       $( this )
       .find( "p" )
       .html( "." )
       .css('background-image', "url('assets/hydrogenL.png')");
      },
      out: function (event, ui) {
       $( this )
       .find( "p" )
       .css('background-image', "url('assets/empty.png')");
      }      
  });
});
