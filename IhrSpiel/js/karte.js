$("#backToMenu_button").mouseover(function () {
  $("#backToMenu_button").css("background-color", "rgb(240,182,186)");
  $("#backToMenu_icon").attr("src", "bilder/zurück_black.svg");
  $("#text_backToMenu_button").css("color", "black");
});

$("#backToMenu_button").mouseout(function () {
  $("#backToMenu_button").css("background-color", "rgb(200, 109, 136)");
  $("#backToMenu_icon").attr("src", "bilder/zurück_white.svg");
  $("#text_backToMenu_button").css("color", "white");
});

$("#backToMenu_button, #eingangKarte").click(function () {
  $("#map").css("display", "block");
  $("#Minispiel_Market").css("display", "none");
  $("#Minispiel_Garden").css("display", "none");
  $("#Minispiel_Dekoshop").css("display", "none");
  $("#todolist").show();
  $("#inventarlist").css("display", "flex");
  $("#Minispiel_Post").hide();
  $("#Minispiel_memory").hide();
  $("#Minispiel_keller").hide();
  $("#weiter_button").hide();
  $("body").css("cursor", "auto");
  if (window.done_aufgaben == 6) {
    $("#party_button").show();
    $("#sonne").css("top", "53%");
    $("#sonne").css("filter", "hue-rotate(-25deg)");
    $("#map_sky").css("filter", "hue-rotate(150deg)");
  }

  if (window.done_aufgaben == 4) {
    $("#sonne").css("top", "43%");
    $("#sonne").css("filter", "hue-rotate(-20deg)");
    $("#map_sky").css("filter", "hue-rotate(120deg)");
  }
  if (window.done_aufgaben == 3) {
    $("#sonne").css("top", "33%");
    $("#sonne").css("filter", "hue-rotate(-15deg)");
    $("#map_sky").css("filter", "hue-rotate(90deg)");
  }
  if (window.done_aufgaben == 2) {
    $("#sonne").css("top", "23%");
    $("#sonne").css("filter", "hue-rotate(-10deg)");
    $("#map_sky").css("filter", "hue-rotate(60deg)");
  }
  if (window.done_aufgaben == 1) {
    $("#sonne").css("top", "13%");
    $("#sonne").css("filter", "hue-rotate(-5deg)");
    $("#map_sky").css("filter", "hue-rotate(30deg)");
  }

  isGameRunning = false; // garden
});

$(function startKarte() {
  var horizontal = -1500;
  var heroHorizontal = 551;
  var start = false;
  var tempo = 2; // Geschwindigkeit der Bewegung für die Hauptkarte
  var rechts = 0;
  var links = 0;
  var mapLeftBorder = -3500;
  var mapRightBorder = 0;
  var charLeftBorder = 200;
  var charRightBorder = 1000;

  var click_sound = new Audio("sound/mouse-click.mp3");
  document.addEventListener("click", function () {
    click_sound.preload = "auto";
    click_sound.play();
  });

  function moveRight() {
    if (horizontal === mapLeftBorder || heroHorizontal < 551) {
      heroHorizontal = Math.min(heroHorizontal + tempo, charRightBorder);
      $("#character_walk").css("left", heroHorizontal + "px");
    } else {
      horizontal = Math.max(horizontal - tempo, mapLeftBorder);
      $("#karte").css("left", horizontal + "px");

      // Layer 2 und Layer 3 bewegen sich langsamer als die Hauptkarte
      $("#karte_layer2").css("left", horizontal * 0.6 + "px");
      $("#karte_layer3").css("left", horizontal * 0.4 + "px");
    }
  }

  function moveLeft() {
    if (horizontal === mapRightBorder || heroHorizontal > 551) {
      heroHorizontal = Math.max(heroHorizontal - tempo, charLeftBorder);
      $("#character_walk").css("left", heroHorizontal + "px");
    } else {
      horizontal = Math.min(horizontal + tempo, mapRightBorder);
      $("#karte").css("left", horizontal + "px");

      // Layer 2 und Layer 3 bewegen sich langsamer als die Hauptkarte
      $("#karte_layer2").css("left", horizontal * 0.6 + "px");
      $("#karte_layer3").css("left", horizontal * 0.4 + "px");
    }
  }

  $("body").keydown(function (e) {
    if (e.which == 39) {
      // Pfeil nach rechts
      if (!start) {
        rechts = setInterval(moveRight, 5);
      }
      start = true;
    }
    if (e.which == 37) {
      // Pfeil nach links
      if (!start) {
        links = setInterval(moveLeft, 5);
      }
      start = true;
    }
  });

  $("body").keyup(function (e) {
    if (e.which == 39) {
      clearTimeout(rechts);
    }
    if (e.which == 37) {
      clearTimeout(links);
    }
    start = false;
  });

  $(".house").hover(
    function () {
      console.log("entered");
      $(this).addClass("drop-shadow");
    },
    function () {
      console.log("exited");
      $(this).removeClass("drop-shadow");
    }
  );
});

window.done_aufgaben = 6;
$("#weiter_button").click(function () {
  $("#map").css("display", "block");
  $("#Minispiel_Market").css("display", "none");
  $("#Minispiel_Garden").css("display", "none");
  $("#Minispiel_Dekoshop").css("display", "none");
  $("#todolist").show();
  $("#inventarlist").css("display", "flex");
  $("#Minispiel_Post").hide();
  $("#Minispiel_memory").hide();
  $("#Minispiel_keller").hide();
  $("#weiter_button").hide();
  $("#haus_eingang").hide();

  if (window.done_aufgaben == 6) {
    $("#party_button").show();
    $("#sonne").css("top", "53%");
    $("#sonne").css("filter", "hue-rotate(-25deg)");
    $("#map_sky").css("filter", "hue-rotate(150deg)");
  }

  if (window.done_aufgaben == 4) {
    $("#sonne").css("top", "43%");
    $("#sonne").css("filter", "hue-rotate(-20deg)");
    $("#map_sky").css("filter", "hue-rotate(120deg)");
  }
  if (window.done_aufgaben == 3) {
    $("#sonne").css("top", "33%");
    $("#sonne").css("filter", "hue-rotate(-15deg)");
    $("#map_sky").css("filter", "hue-rotate(90deg)");
  }
  if (window.done_aufgaben == 2) {
    $("#sonne").css("top", "23%");
    $("#sonne").css("filter", "hue-rotate(-10deg)");
    $("#map_sky").css("filter", "hue-rotate(60deg)");
  }
  if (window.done_aufgaben == 1) {
    $("#sonne").css("top", "13%");
    $("#sonne").css("filter", "hue-rotate(-5deg)");
    $("#map_sky").css("filter", "hue-rotate(30deg)");
  }
});

window.found = false;

$("#herr_Bröckelmann").click(function () {
  if (window.found) {
    $("#comment_lost").show();
    $("#comment_lost_ja").show();
    $("#comment_lost_png").show();

    $("#comment_lost").text("Hast du meinen Schal gefunden?");
    $("#comment_lost_ja").text("Ja hab ich!");
    window.Easter_egg = true;
    $("#comment_lost_ja").click(function () {
      $(this).unbind();
      $("#comment_lost").text("Danke! Wir sehen uns bei der Party.");
      $("#comment_lost_ja").hide();
      $("#inventarSchal").hide();
      if (window.done_aufgaben == 0) {
        $("#inventarLeer").show();
      }
    });
  } else {
    $("#comment_lost").show();
    $("#comment_lost_ja").show();
    $("#comment_lost_png").show();
    $("#comment_lost").text(
      "Hallo! Bereitest du dich gerade auf die Party vor?"
    );
    $("#comment_lost_ja").click(function () {
      $("#comment_lost").text(
        "Ich würde gerne kommen, aber ich habe meinen Schal verloren."
      );
      $("#comment_lost_ja").css("width", "250px");
      $("#comment_lost_ja").css("left", "4420px");
      $("#comment_lost_ja").css("top", "452px");
      $("#comment_lost_ja").text("Ich werde versuchen, Ihren Schal zu finden!");
      $("#comment_lost_ja").click(function () {
        $("#comment_lost").hide();
        $("#comment_lost_ja").hide();
        $("#comment_lost_png").hide();
        $(this).unbind();
      });
    });
  }
});

$("#alles_klar_button").click(function () {
  $("#alles_klar_button").hide();
  $("#instr_walking").hide();
});

$("#lui, #may").click(function () {
  $("#karte_herz").show();
  setTimeout(function () {
    $("#karte_herz").hide();
  }, 3000);
});
