$("#house_farm").click(function () {
  $("#todolist").hide();
  $("#inventarlist").hide();
  $("#sound").show();
  $("#map").hide();
  $("#haus_eingang").show();
});

$("#memory_start, #keller_start, #eingangKarte").mouseover(function () {
  $(this).addClass("drop-shadow");
});

$("#memory_start, #keller_start, #eingangKarte").mouseout(function () {
  $(this).removeClass("drop-shadow");
});