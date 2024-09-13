$(function () {
  $("#deko_house").click(function () {
    startDekoshopGame();
  });
});

var cash_sound = new Audio("sound/cash_sound.mp3"); // specify the correct path to your sound file

function startDekoshopGame() {
  $("#map").css("display", "none");
  $("#sound").show();
  $("#todolist").hide();
  $("#inventarlist").hide();
  $("#Minispiel_Dekoshop").css("display", "block");
  $("#text_deko").text("Hallo! Möchtest du etwas Deko kaufen?");
  $("#reply_deko").show();
}

$("#reply_deko").click(function () {
  if (window.hasMoney) {
    $("#text_deko").text(
      "Danke für deinen Einkauf! Ich wünsche dir viel Spaß damit"
    );
    $("#reply_deko").hide();
    cash_sound.play();
    window.done_aufgaben++;
    $("#weiter_button").show();
    $("#todoDeko").attr("src", "bilder/checkmark.svg");
    $("#inventarDeko").css("display","flex");
    $("#inventarGeld, #inventarLeer").hide();
  } else {
    $("#text_deko").text(
      "Tut mit leid, du hast nicht genug Geld um etwas zu kaufen. Komm später!"
    );
    $("#reply_deko").hide();
  }
});

$("#schal").mouseover(function () {
  $(this).addClass("drop-shadow");
});

$("#schal").mouseout(function () {
  $(this).removeClass("drop-shadow");
});

$("#schal").click(function () {
  $("#schal").hide();
  window.found = true;
  $("#inventarSchal").css("display","flex");
  $("#inventarLeer").hide();
});
