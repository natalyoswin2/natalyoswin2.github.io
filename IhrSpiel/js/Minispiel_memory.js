// Zu Beginn des Spiels wird der Status von 'gameWon' aus localStorage geladen
$("#memory_start, #eingangkuechesign").click(function () {
  $("#todolist").hide();
  $("#inventarlist").hide();
  $("#sound").show();
  $("#map").hide();
  $("#haus_eingang").hide();
  $("#Minispiel_memory").show();

  // Überprüfen, ob das Spiel bereits gewonnen wurde (aus localStorage)
  if (localStorage.getItem("memoryGameWon") === "true") {
    // Wenn das Spiel schon gewonnen wurde, Kerzen anzeigen
    $("#kerze, #kerze1, #kerze2, #kerze3, #kerze4, #kerze5").css(
      "display",
      "block"
    );
  } else {
    // Wenn nicht, Kerzen verstecken
    $("#kerze, #kerze1, #kerze2, #kerze3, #kerze4, #kerze5").css(
      "display",
      "none"
    );
  }
});

$(document).ready(function () {
  let karte1 = "";
  let karte2 = "";
  let punkte = 0;
  let canClick = true; // Variable to control clicking
  const $Punkteanzeige = $("#Punkteanzeige_memory");
  const $karten = $(".karte");
  var correct_sound = new Audio("sound/correct.mp3");
  var claps_sound = new Audio("sound/claps.mp3");
  correct_sound.preload = "auto";

  const originalCardArray = [
    { name: "sugar", img: "bilder/sugarImg.svg" },
    { name: "flour", img: "bilder/flourImg.svg" },
    { name: "chocolate", img: "bilder/chocolateImg.svg" },
    { name: "butter", img: "bilder/butterImg.svg" },
    { name: "milk", img: "bilder/milkImg.svg" },
    { name: "eggs", img: "bilder/eggsImg.svg" },
    { name: "sugar", img: "bilder/sugarText.svg" },
    { name: "flour", img: "bilder/flourText.svg" },
    { name: "chocolate", img: "bilder/chocolateText.svg" },
    { name: "butter", img: "bilder/butterText.svg" },
    { name: "milk", img: "bilder/milkText.svg" },
    { name: "eggs", img: "bilder/eggsText.svg" },
  ];

  let cardArray = [...originalCardArray].sort(() => Math.random() - 0.5);

  let cardsWon = [];
  let previousIndex = -1;
  let currentCard2Index = -1;
  $("#herd").mouseover(function () {
    $("#herd").addClass("drop-shadow");
  });

  $("#herd").mouseout(function () {
    $("#herd").removeClass("drop-shadow");
  });

  $("#ofen").mouseover(function () {
    $("#ofen").addClass("drop-shadow");
  });

  $("#ofen").mouseout(function () {
    $("#ofen").removeClass("drop-shadow");
  });

  // Assign click event handlers to each card
  $("#herd, #ofen").click(function () {
    $(".kueche").css("display", "none"); // Küche verstecken
    $("#stove").hide();

    $karten.click(function () {
      if (!canClick) return; // Prevent clicking if canClick is false

      const index = $karten.index($(this));
      const $card = $(this);
      $card.css("transition", "transform 0.4s");
      $card.css("transform", "rotateY(180deg)");
      canClick = false; // Disable further clicks

      setTimeout(function () {
        $card.attr("src", cardArray[index].img);
      }, 200);

      if (karte2 === "") {
        if (karte1 === "") {
          karte1 = cardArray[index].name;
          previousIndex = index;
          canClick = true; // Re-enable clicking after initial flip
        } else {
          karte2 = cardArray[index].name;
          currentCard2Index = index;

          if (
            karte1 === karte2 &&
            !cardsWon.includes(karte1) &&
            index !== previousIndex
          ) {
            punkte++;
            correct_sound.play(); // Spielt den Sound ab
            $Punkteanzeige.text("Punkte: " + punkte);
            cardsWon.push(karte1);
            if (punkte === 6) {
              $karten.css("display", "none");
              $("h1").text("Gut gemacht!");
              $(
                "#kuchen, #konfetti_memory, #konfetti2_memory, #konfetti3_memory, #konfetti4_memory, #tisch_memory"
              ).css("display", "block");
              $("#weiter_button").show();
              $("#kerze, #kerze1, #kerze2, #kerze3, #kerze4, #kerze5").css(
                "display",
                "block"
              ); // Kerzen anzeigen

              // Spiel gewonnen, Speichern des Status in localStorage
              localStorage.setItem("memoryGameWon", "true");
        
              window.done_aufgaben++;
              $("#inventarKochen").css("display","flex");
              $("#inventarLeer").hide();
              claps_sound.play(); // Spielt den Sound ab
              $("#todoKochen").attr("src", "bilder/checkmark.svg");
            }
            canClick = true; // Re-enable clicking after match
          } else {
            // If the pair doesn't match, reset the cards after a delay
            setTimeout(function () {
              $(
                `#karte${previousIndex + 1}, #karte${currentCard2Index + 1}`
              ).attr("src", "bilder/back.svg");
              $(
                `#karte${previousIndex + 1}, #karte${currentCard2Index + 1}`
              ).css("transform", "rotateY(0deg)");
              canClick = true; // Re-enable clicking after reset
            }, 800);
          }
          // Reset for the next turn
          karte1 = "";
          karte2 = "";
        }
      }
    });
  });
});

$("#ofen, #herd").mouseover(function () {
  $(this).addClass("drop-shadow");
});

$("#ofen, #herd").mouseout(function () {
  $(this).removeClass("drop-shadow");
});