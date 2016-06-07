function showHitbox() {
  $("#stream_1").hide();
  $("#stream_2").show();
  $("#streamup-li").removeClass("active");
  $("#hitbox-li").addClass("active");
}

function showStreamup() {
  $("#stream_2").hide();
  $("#stream_1").show();
  $("#streamup-li").addClass("active");
  $("#hitbox-li").removeClass("active");
}

if (window.location.hash == "#streamup") {
  showStreamup();
} else {
  showHitbox();
}

$("#hitbox-button").click(showHitbox);

$("#streamup-button").click(showStreamup);

