$(function () {
  $("#garden_house").click(function () {
    startGardenGame();
  });
});

var fruit_sound = new Audio("sound/fruit_catch.mp3");
function startGardenGame() {
  var isGameRunning = false;
  var fallen1 = 0;
  var fallen2 = 0;
  var fallen3 = 0;
  var fallen4 = 0;
  var fallen5 = 0;
  var counterInterval = 0;

  $("#map").css("display", "none");
  $("#sound").show();
  $("#todolist").hide();
  $("#inventarlist").hide();

  $("#Minispiel_Garden").css("display", "block");

  if ($("#well_done").css("display") == "block") {
    // game has already been played
    return;
  }

  $("#table_garden, #fruits").css("display", "none");

  $("#text_backToMenu_button").click(exitGardenGame);

  $("#intro_garden").css("display", "block");

  $("#basket_bild").mouseover(function () {
    $("#basket_bild").addClass("drop-shadow");
  });

  $("#basket_bild").mouseout(function () {
    $("#basket_bild").removeClass("drop-shadow");
  });

  $("#basket").click(function () {
    $("#basket").off();

    if (isGameRunning) return;

    isGameRunning = true;

    $("#intro_garden").css("display", "none");
    $("#table_garden, #fruits").css("display", "block");
    // Basket movements
    var horizontal = 700;
    // var vertikal = 1;
    var start = false;
    var tempo = 4;
    var links = 0;
    var rechts = 0;

    $("body").keydown(function (e) {
      if (e.which == 39) {
        if (start == false) {
          rechts = setInterval(moveBasketRight, 5);
        }
        start = true;
      }
      if (e.which == 37) {
        if (start == false) {
          links = setInterval(moveBasketLeft, 5);
        }
        start = true;
      }
    });

    $("body").keyup(function (e) {
      if (e.which == 39) {
        clearInterval(rechts);
      }
      if (e.which == 37) {
        clearInterval(links);
      }

      start = false;
    });

    moveBasketRight = function () {
      horizontal = Math.min(horizontal + tempo, 1150);

      $("#basket").css("left", horizontal);
    };

    moveBasketLeft = function () {
      horizontal = Math.max(horizontal - tempo, 0);

      $("#basket").css("left", horizontal);
    };
    var screenWidth = 1200;
    var vertikal1 = -30;
    var vertikal2 = -30;
    var vertikal3 = -30;
    var vertikal4 = -30;
    var vertikal5 = -30;
    // var vertikal6 = -30;
    var start = false;
    // var schritt = 1;
    var zufall1 = Math.ceil(Math.random() * screenWidth);
    $("#birne").css("left", zufall1);

    var zufall2 = Math.ceil(Math.random() * screenWidth);
    $("#apfel").css("left", zufall2);

    var zufall3 = Math.ceil(Math.random() * screenWidth);
    $("#aprikose").css("left", zufall3);

    var zufall4 = Math.ceil(Math.random() * screenWidth);
    $("#pflaume").css("left", zufall4);

    var zufall5 = Math.ceil(Math.random() * screenWidth);
    $("#cherry").css("left", zufall5);

    fallen1 = setInterval("regnen1()", 6);
    fallen2 = setInterval("regnen2()", 3);
    fallen3 = setInterval("regnen3()", 8);
    fallen4 = setInterval("regnen4()", 10);
    fallen5 = setInterval("regnen5()", 0.25);

    var gesammelteApfel = 0;
    var gesammelteBirne = 0;
    var gesammelteAprikose = 0;
    var gesammeltePflaume = 0;
    var gesammelteCherry = 0;
    var activeFruit = "Pear";
    window.hasFruits = false;

    $("#text_garden").text(activeFruit);

    regnen1 = function () {
      if (vertikal1 < 700) {
        vertikal1 = vertikal1 + 1;

        if (isFruitInsideOfBasket($("#birne")) && activeFruit == "Pear") {
          gesammelteBirne = gesammelteBirne + 1;
          fruit_sound.play();
          vertikal1 = -30;
          zufall1 = Math.ceil(Math.random() * screenWidth);
          $("#birne").css("left", zufall1);

          if (gesammelteBirne == 5) {
            activeFruit = "Apple";
            $("#text_garden").text(activeFruit);
          }
        }
      } else {
        vertikal1 = -30;
        zufall1 = Math.ceil(Math.random() * screenWidth);
        $("#birne").css("left", zufall1);
      }
      $("#birne").css("top", vertikal1);
    };

    regnen2 = function () {
      if (vertikal2 < 700) {
        vertikal2 = vertikal2 + 1;

        if (isFruitInsideOfBasket($("#apfel")) && activeFruit == "Apple") {
          gesammelteApfel = gesammelteApfel + 1;
          fruit_sound.play();
          vertikal2 = -30;
          zufall2 = Math.ceil(Math.random() * screenWidth);
          $("#apfel").css("left", zufall2);

          if (gesammelteApfel == 3) {
            activeFruit = "Apricot";
            $("#text_garden").text(activeFruit);
          }
        }
      } else {
        vertikal2 = -30;
        zufall2 = Math.ceil(Math.random() * screenWidth);
        $("#apfel").css("left", zufall2);
      }
      $("#apfel").css("top", vertikal2);
    };

    regnen3 = function () {
      if (vertikal3 < 700) {
        vertikal3 = vertikal3 + 1;

        if (isFruitInsideOfBasket($("#aprikose")) && activeFruit == "Apricot") {
          gesammelteAprikose = gesammelteAprikose + 1;
          fruit_sound.play();
          vertikal3 = -30;
          zufall3 = Math.ceil(Math.random() * screenWidth);
          $("#aprikose").css("left", zufall3);

          if (gesammelteAprikose == 4) {
            activeFruit = "Plum";
            $("#text_garden").text(activeFruit);
          }
        }
      } else {
        vertikal3 = -30;
        zufall3 = Math.ceil(Math.random() * screenWidth);
        $("#aprikose").css("left", zufall3);
      }
      $("#aprikose").css("top", vertikal3);
    };

    regnen4 = function () {
      if (vertikal4 < 700) {
        vertikal4 = vertikal4 + 1;

        if (isFruitInsideOfBasket($("#pflaume")) && activeFruit == "Plum") {
          gesammeltePflaume = gesammeltePflaume + 1;
          fruit_sound.play();
          vertikal4 = -30;
          zufall4 = Math.ceil(Math.random() * screenWidth);
          $("#pflaume").css("left", zufall4);

          if (gesammeltePflaume == 6) {
            activeFruit = "Cherry";
            $("#text_garden").text(activeFruit);
          }
        }
      } else {
        vertikal4 = -30;
        zufall4 = Math.ceil(Math.random() * screenWidth);
        $("#pflaume").css("left", zufall4);
      }
      $("#pflaume").css("top", vertikal4);
    };

    regnen5 = function () {
      if (vertikal5 < 700) {
        vertikal5 = vertikal5 + 1;

        if (isFruitInsideOfBasket($("#cherry")) && activeFruit == "Cherry") {
          gesammelteCherry = gesammelteCherry + 1;
          fruit_sound.play();
          vertikal5 = -30;
          zufall5 = Math.ceil(Math.random() * screenWidth);
          $("#cherry").css("left", zufall5);
        }
      } else {
        vertikal5 = -30;
        zufall5 = Math.ceil(Math.random() * screenWidth);
        $("#cherry").css("left", zufall5);
      }
      $("#cherry").css("top", vertikal5);
    };

    counterInterval = setInterval("show_the_count()", 5);

    show_the_count = function () {
      if (activeFruit == "Pear") {
        $("#nummber_of_fruits").text(gesammelteBirne + " / 5 ");
      }
      if (activeFruit == "Apple") {
        $("#nummber_of_fruits").text(gesammelteApfel + " / 3 ");
      }
      if (activeFruit == "Apricot") {
        $("#nummber_of_fruits").text(gesammelteAprikose + " / 4 ");
      }
      if (activeFruit == "Plum") {
        $("#nummber_of_fruits").text(gesammeltePflaume + " / 6 ");
      }
      if (activeFruit == "Cherry") {
        $("#nummber_of_fruits").text(gesammelteCherry + " / 8 ");
        if (gesammelteCherry == 8) {
          window.hasFruits = true;
          window.done_aufgaben++;
          
          $("#inventarErnte").css("display","flex");
          $("#inventarLeer").hide();
          $("#todoErnte").attr("src", "bilder/checkmark.svg");
          endOfgame();
        }
      }
    };

    endOfgame = function () {
      $("#well_done").css("display", "block");
      $("#weiter_button").show();
      claps_sound.play();

      exitGardenGame();
    };

    function isFruitInsideOfBasket(element) {
      var basketCoord = $("#basket")[0].getBoundingClientRect();
      var fruitCoord = element[0].getBoundingClientRect();

      if (
        basketCoord.left < fruitCoord.left &&
        basketCoord.right > fruitCoord.right &&
        basketCoord.top < fruitCoord.top &&
        basketCoord.bottom > fruitCoord.bottom
      ) {
        return true;
      }
      return false;
    }
  });

  function exitGardenGame() {
    clearInterval(fallen1);
    clearInterval(fallen2);
    clearInterval(fallen3);
    clearInterval(fallen4);
    clearInterval(fallen5);
    clearInterval(counterInterval);

    $("#body").off();
    $("#text_backToMenu_button").unbind("click", exitGardenGame);
    $("#birne, #cherry, #pflaume, #aprikose, #apfel").css("top", "-50px");
  }
}
