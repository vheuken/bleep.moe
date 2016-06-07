$("#stream_1").hide();

$("#hitbox-button").click(function() {
  $("#stream_1").hide();
  $("#stream_2").show();
  $("#streamup-li").removeClass("active");
  $("#hitbox-li").addClass("active");
});

$("#streamup-button").click(function() {
  $("#stream_2").hide();
  $("#stream_1").show();
  $("#streamup-li").addClass("active");
  $("#hitbox-li").removeClass("active");
});

