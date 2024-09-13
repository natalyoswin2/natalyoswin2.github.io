$(document).ready(function () {
  var punkte = 0;
  var correct_sound = new Audio("sound/correct.mp3");
  correct_sound.preload = "auto";
  var claps_sound = new Audio("sound/claps.mp3");
  let canClick = true;
  let aufgabeIndex = 0;
  const maxFragen = 12; // There are only 12 questions in total (3 from each category)
  const Augabentypen = [
    "chs oder x?",
    "v oder f?",
    "'?', '.' oder '!'?",
    "ä oder e?",
  ];
  $("#house_post").click(function () {
    $("#map").hide();
    $("#sound").show();
    $("#todolist").hide();
    $("#inventarlist").hide();
    $("#Minispiel_Post").show();
  });

  $("#tisch").click(function () {
    $("#quiz").css("display", "block");
    $("#shop").css("display", "none");
    $("#karte_post").css("display", "none");
    $("#Antwort1").css("display", "block");
    $("#Antwort2").css("display", "block");
    naechsteAufgabe();
  });

  $("#person").click(function () {
    $("#dialogWindow_post").css("display", "block");
  });

  const originalSaetze_chsx = [
    { satz: "Der Fu_", r: "chs", w: "x", src: "bilder/wort1.jpg" },
    { satz: "Der O_e", r: "chs", w: "x", src: "bilder/wort2.jpg" },
    { satz: "wa_en", r: "chs", w: "x", src: "bilder/wort3.jpg" },
    { satz: "bo_en", r: "x", w: "chs", src: "bilder/wort4.jpg" },
    { satz: "mi_en", r: "x", w: "chs", src: "bilder/wort5.jpg" },
    { satz: "Die A_t", r: "x", w: "chs", src: "bilder/wort6.jpg" },
  ];

  const originalSaetze_vf = [
    { satz: "_orbei", r: "v", w: "f", src: "bilder/wort7.jpg" },
    { satz: "_errückt", r: "v", w: "f", src: "bilder/wort8.jpg" },
    { satz: "_erkratzt", r: "v", w: "f", src: "bilder/wort9.jpg" },
    { satz: "Die _orderung", r: "F", w: "V", src: "bilder/wort10.jpg" },
    { satz: "Die _ormel", r: "F", w: "V", src: "bilder/wort11.jpg" },
    { satz: "_ern", r: "f", w: "v", src: "bilder/wort12.jpg" },
  ];

  const originalSaetze_punkt = [
    { satz: "Lass das_", r: "!", w: ".", src: "bilder/wort13.jpg" },
    { satz: "Darf ich mitgehen_", r: "?", w: ".", src: "bilder/wort14.jpg" },
    { satz: "Ich mag dich_", r: ".", w: "?", src: "bilder/wort15.jpg" },
    { satz: "Hör auf damit_", r: "!", w: ".", src: "bilder/wort16.jpg" },
    { satz: "Wo kommst du her_", r: "?", w: ".", src: "bilder/wort17.jpg" },
    { satz: "Ich heiße Hanna", r: ".", w: "?", src: "bilder/wort18.jpg" },
  ];

  const originalSaetze_eu = [
    { satz: "h_fig", r: "äu", w: "eu", src: "bilder/wort19.png" },
    { satz: "h_te", r: "eu", w: "äu", src: "bilder/wort20.jpg" },
    { satz: "_rgerlich", r: "ä", w: "e", src: "bilder/wort21.jpg" },
    { satz: "zuf_llig", r: "ä", w: "e", src: "bilder/wort22.jpg" },
    { satz: "H_ft", r: "e", w: "ä", src: "bilder/wort23.jpg" },
    { satz: "h_rzlich", r: "e", w: "ä", src: "bilder/wort24.jpg" },
  ];

  // Shuffle the arrays and select the first three elements from each shuffled array
  function shuffleAndSelect(arr) {
    return [...arr].sort(() => Math.random() - 0.5).slice(0, 3);
  }

  function getShuffledSentences() {
    return [
      ...shuffleAndSelect(originalSaetze_chsx),
      ...shuffleAndSelect(originalSaetze_vf),
      ...shuffleAndSelect(originalSaetze_punkt),
      ...shuffleAndSelect(originalSaetze_eu),
    ];
  }

  let saetze = getShuffledSentences();

  function naechsteAufgabe() {
    if (aufgabeIndex >= maxFragen) {
      $(
        "#Antwort1, #Antwort2, #Frage, #Punkteanzeige, #punkte, #punkte2, #bild, #fragentyp, #feedback"
      ).hide();
      $("#karte_post.ende, #karte_post").show();
      $("#background_post").css("background-color", "initial");

      if (punkte >= 7) {
        $("h1").text("Super! Du hast " + punkte + " Punkte erreicht!");
        $(
          "#konfetti_post, #konfetti2_post, #konfetti3_post, #konfetti4_post"
        ).show();
        window.done_aufgaben++;
        $("#buttons_post").hide();
        $("#weiter_button").show();
        $("#inventarEinladung").css("display", "flex");
        $("#inventarLeer").hide();

        claps_sound.play(); // Spielt den Sound ab
        $("#todoEinladung").attr("src", "bilder/checkmark.svg");
        if (window.isPaula) {
          $("#karte_post").attr("src", "bilder/karte_luigi.svg");
        }
      } else {
        $("h1").text(
          "Gib nicht auf! Du hast " + punkte + " Punkt(e) erreicht!"
        );
        $("#karte_post").attr("src", "bilder/post_karteFail.svg");
        $("#stift, #stift2").hide();
        $("#karte_post").css("height", "95%");
        $("#karte_post").css("left", "24%");
      }
      return;
    }

    let aktuelleAufgabe = saetze[aufgabeIndex];
    let augabentypIndex = Math.floor(aufgabeIndex / 3);
    $("#fragentyp").text(Augabentypen[augabentypIndex]);
    $("#feedback").text("");
    $("#Frage").text(aktuelleAufgabe.satz);

    let antworten = [aktuelleAufgabe.r, aktuelleAufgabe.w].sort(
      () => Math.random() - 0.5
    );
    $("#Antwort1").text(antworten[0]);
    $("#Antwort2").text(antworten[1]);
    $("#bild img").attr("src", aktuelleAufgabe.src);

    $(".antwort")
      .off()
      .click(function () {
        if (!canClick) return;
        canClick = false;
        let selectedAnswer = $(this).text();
        let clickedElement = $(this); // Speichern des geklickten Elements
        if (selectedAnswer === aktuelleAufgabe.r) {
          punkte++;

          correct_sound.play(); // Spielt den Sound ab
          $("#Punkteanzeige").text("Punkte: " + punkte + "/12");
          $("#feedback").text("Richtig!");
          clickedElement.css("background-color", "green");
          clickedElement.css("color", "white");

          const rect = this.getBoundingClientRect();
          // Calculates the horizontal (x) center of the button.
          const x = (rect.left + rect.right) / 2;
          // Calculates the vertical (y) center of the button.
          const y = (rect.top + rect.bottom) / 2;
          // Configures the settings for the confetti effect.
          const confettiSettings = {
            particleCount: 50, // Defines the number of confetti particles.
            spread: 70, // Sets the spread angle of the confetti.
            // Specifies the origin point for the confetti effect based on the button's location.
            origin: { x: x / window.innerWidth, y: y / window.innerHeight },
          };
          // Triggers the confetti effect with the defined settings when the button is clicked.
          confetti(confettiSettings);
        } else {
          $("#feedback").text(
            "Falsch, die richtige Antwort ist: " + aktuelleAufgabe.r
          );
          $("#Punkteanzeige").text("Punkte: " + punkte + "/10");
          clickedElement.css("background-color", "#C43B1B");
          clickedElement.css("color", "white");
        }

        aufgabeIndex++;
        setTimeout(function () {
          clickedElement.css("background-color", "#ffff");
          clickedElement.css("color", "black");
          naechsteAufgabe();
          canClick = true;
        }, 2000);
      });
  }

});
