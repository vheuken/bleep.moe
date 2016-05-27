var stream_num = 1;

$("#stream_2").hide();

$("#switch_button").click(function() {
  if (stream_num === 1) {
    $("#stream_1").hide();
    $("#stream_2").show();
    stream_num = 2;
  } else {
    $("#stream_2").hide();
    $("#stream_1").show();
    stream_num = 1;
  }
});
