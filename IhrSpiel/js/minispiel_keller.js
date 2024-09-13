var $cursorImage = $("#keller_cursor-image");
var mouseX = 0;
var mouseY = 0;

var correct_sound = new Audio("sound/correct.mp3");
var claps_sound = new Audio("sound/claps.mp3");
var countdown_sound = new Audio("sound/countdown.mp3");


var punkte = 0;
let aufgabeIndex = 0;

$("#keller_start, #eingangkellersign").click(function () {
  $("#todolist").hide();
  $("#inventarlist").hide();
  $("#sound").show();
  $("#map").hide();
  $("#haus_eingang").hide();
  $("#Minispiel_keller").show();});

$(document).ready(function () {
  punkte = 0;
  aufgabeIndex = 0;
  const maxFragen = 7;
  let correctAnswer;
  const AUFGABEN = [
    { aufgabe: "glasses", zusatz: "are" },
    { aufgabe: "radio", zusatz: "is" },
    { aufgabe: "lamp", zusatz: "is" },
    { aufgabe: "games", zusatz: "are" },
    { aufgabe: "poster", zusatz: "is" },
    { aufgabe: "speaker", zusatz: "is" },
    { aufgabe: "jars", zusatz: "are" },
    { aufgabe: "plates", zusatz: "are" },
    { aufgabe: "dartboard", zusatz: "is" },
    { aufgabe: "forks and knives", zusatz: "are" },
    { aufgabe: "string lights", zusatz: "are" },
    { aufgabe: "candles", zusatz: "are" },
    { aufgabe: "paint", zusatz: "is" },
    { aufgabe: "microphones", zusatz: "are" },
    { aufgabe: "fan", zusatz: "is" },
    { aufgabe: "toilet paper", zusatz: "is" },
    { aufgabe: "soda", zusatz: "is" },
    { aufgabe: "disco ball", zusatz: "is" },
    { aufgabe: "chips", zusatz: "are" },
  ];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  let aufgabenKopie = shuffleArray([...AUFGABEN]); // Shuffle tasks initially

  function naechsteAufgabe() {
    if (aufgabeIndex >= maxFragen || aufgabenKopie.length === 0) {

      $(
        "#keller_Frage, #keller_Punkteanzeige, #keller_feedback, #keller_hintergrund, .object, .keller_regal, #keller_feedback"
      ).hide();
      $(".ende").show();
      $("#keller_Ueberschrift").css("width", "500px");
      $("body").css("cursor", "auto");
      $cursorImage.hide();
      $("#weiter_button").show();
      if (punkte >= maxFragen) {
        $("#keller_h1").text("Super! Du hast " + punkte + " Punkte erreicht!");
        $(
          "#keller_konfetti, #keller_konfetti2, #keller_konfetti3, #keller_konfetti4"
        ).show();
        claps_sound.play();

        window.done_aufgaben++;
        $("#todoKeller").attr("src", "bilder/checkmark.svg");
        $("#inventarLeer").hide();
        $("#keller_winning").show();
        $("#inventarKeller").css("display","flex");
      } 
      return;
    }

    let aktuelleAufgabeIndex = Math.floor(Math.random() * aufgabenKopie.length);
    let aktuelleAufgabe = aufgabenKopie[aktuelleAufgabeIndex];
    $("#keller_feedback").text("");
    $("#keller_Frage").text(
      "Where " +
        aktuelleAufgabe.zusatz +
        " the " +
        aktuelleAufgabe.aufgabe +
        "?"
    );

    correctAnswer = aktuelleAufgabe.aufgabe;
    aufgabenKopie.splice(aktuelleAufgabeIndex, 1);
    aufgabeIndex++;
  }

  $("#keller_start, #eingangkellersign").click(function () {
    $("#todolist").hide();
    $("#inventarlist").hide();
    $("#sound").show();
    $("#map").hide();
    $("#haus_eingang").hide();
    $("#Minispiel_keller").show();
    punkte = 0;
    aufgabeIndex = 0;
    aufgabenKopie = shuffleArray([...AUFGABEN]); // Shuffle tasks on restart

    // Update cursor image position
    $(document).mousemove(function (event) {
      $cursorImage.css({
        left: event.clientX + 10 + "px",
        top: event.clientY + 10 + "px",
      });
      mouseX = event.clientX;
      mouseY = event.clientY;
    });

    $("body").css("cursor", "none");
    $cursorImage.show();

    // Starte das Spiel mit der ersten Aufgabe
    naechsteAufgabe();
  });

  $(".objectimg").click(function () {
    let clickedElement = $(this).parent().attr("id").replace("keller_", "");

    $("#keller_feedback")
      .css({
        left: mouseX - 70 + "px",
        top: mouseY - 70 + "px",
        animation: "keller_feedback 5s linear",
      })
      .show();

    let cleanAnswer = correctAnswer.replace(/ /g, "");

    if (clickedElement === cleanAnswer) {
      punkte++;
      $("#keller_Punkteanzeige").text("Punkte: " + punkte + "/" + maxFragen);
      $("#keller_feedback").text("Richtig!");

      correct_sound.play();
      $(this).hide();

      

      setTimeout(function () {
        $("#keller_feedback").hide();
        naechsteAufgabe();
      }, 3000);
    } else {
      $("#keller_feedback").text("Falsch, versuch es nochmal!");

      setTimeout(function () {
        $("#keller_feedback").hide();
      }, 3000);
    }
  });
});
