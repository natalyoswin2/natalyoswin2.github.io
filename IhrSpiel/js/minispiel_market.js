$(function () {
  $("#markt_house").click(function () {
    startMarketGame();
    $("#todolist").hide();
    $("#inventarlist").hide();
    $("#sound").show();
  });
});

function startMarketGame() {
  $("#map").css("display", "none");
  $("#Minispiel_Market").css("display", "block");

  $("#table, #fruits").css("display", "none");

  $("#nein").mouseover(function () {
    $("#button_dunk").attr("src", "bilder/button_hell.png");
    $("#nein_text").css("color", "black");
  });
  $("#nein").mouseout(function () {
    $("#button_dunk").attr("src", "bilder/button_dunk.png");
    $("#nein_text").css("color", "white");
  });

  $("#ja").mouseover(function () {
    $("#button_dunk_ja").attr("src", "bilder/button_hell.png");
    $("#ja_text").css("color", "black");
  });
  $("#ja").mouseout(function () {
    $("#button_dunk_ja").attr("src", "bilder/button_dunk.png");
    $("#ja_text").css("color", "white");
  });

  $("#gerne").mouseover(function () {
    $("#button_dunk_gerne").attr("src", "bilder/button_hell.png");
    $("#gerne_text").css("color", "black");
  });
  $("#gerne").mouseout(function () {
    $("#button_dunk_gerne").attr("src", "bilder/button_dunk.png");
    $("#gerne_text").css("color", "white");
  });

  $("#nein").click(function () {
    $("#seller_text").html("Dann komm doch später wieder. <br /> Bis gleich!");
  });

  $("#ja").click(function () {
    if (window.hasFruits) {
      $("#seller_text").html(
        "Prima! Auf der Tafel rechts neben mir kannst du die Preise sehen. Kannst du mir bitte helfen alles zu berechnen?"
      );
      $("#gerne").css("display", "block");
      $("#ja, #nein").css("display", "none");
    } else {
      $("#seller_text").html(
        "Lüge mich nicht an!  <br /> Komm doch später wieder. <br /> Bis gleich!"
      );
    }
  });

  var pearCount = "Für 8 Birnen bekommst du:";
  var appleCount = "Für 10 Äpfeln bekommst du:";
  var apriCount = "Für 25 Aprikosen bekommst du:";
  var pflaumCount = "Für 4 Pflaumen bekommst du:";
  var cherryCount = "Für 30 Kirschen bekommst du:";
  var obstFrage;
  var antwort;
  window.hasMoney = false;

  $("#gerne").click(function () {
    $("#textOnBoard").text(pearCount);
    obstFrage = pearCount;
    $("#board").css("display", "block");
    $("#gerne").css("display", "none");
    $("#dialogWindow").css("display", "none");
  });

  $("#check_market").mouseover(function () {
    $("#check_market").css("background-color", "rgb(230,230,250)");
    $("#check_market").css("color", "black");
  });
  $("#check_market").mouseout(function () {
    $("#check_market").css("background-color", "rgb(185, 134, 180)");
    $("#check_market").css("color", "white");
  });
  //  Enter Button function
  var input = document.getElementById("price");
  // Execute a function when the user presses a key on the keyboard
  input.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("check_market").click();
    }
  });
  $("#check_market").click(function () {
    antwort = $("#price").val();

    if (obstFrage == pearCount) {
      if (antwort == "16") {
        $("#motivation").css("display", "block");
        $("#mot_text").text("Supi!");
        $("#mot_window").attr("src", "bilder/motivationGreen.png");
        $("#textOnBoard").text(appleCount);
        obstFrage = appleCount;
        $("#price").val("");

        return;
      } else {
        $("#price").val("");
        $("#mot_window").attr("src", "bilder/motivationRed.png");
        $("#motivation").css("display", "block");
        $("#mot_text").text("Versuch noch mal!");
      }
    }

    if (obstFrage == appleCount) {
      if (antwort == "5") {
        $("#textOnBoard").text(apriCount);
        obstFrage = apriCount;
        $("#price").val("");
        $("#motivation").css("display", "block");
        $("#mot_text").text("Amazing!");
        $("#mot_window").attr("src", "bilder/motivationGreen.png");

        return;
      } else {
        $("#price").val("");
        $("#mot_window").attr("src", "bilder/motivationRed.png");
        $("#motivation").css("display", "block");
        $("#mot_text").text("Upssss!");
      }
    }

    if (obstFrage == apriCount) {
      if (antwort == "25") {
        $("#textOnBoard").text(pflaumCount);
        obstFrage = pflaumCount;
        $("#price").val("");
        $("#motivation").css("display", "block");
        $("#mot_text").text("Prima!");
        $("#mot_window").attr("src", "bilder/motivationGreen.png");

        return;
      } else {
        $("#price").val("");
        $("#mot_window").attr("src", "bilder/motivationRed.png");
        $("#motivation").css("display", "block");
        $("#mot_text").text("Nicht schlimm!");
      }
    }

    if (obstFrage == pflaumCount) {
      if (antwort == "12") {
        $("#textOnBoard").text(cherryCount);
        obstFrage = cherryCount;
        $("#price").val("");
        $("#motivation").css("display", "block");
        $("#mot_text").text("Excellent!");
        $("#mot_window").attr("src", "bilder/motivationGreen.png");

        return;
      } else {
        $("#price").val("");
        $("#mot_window").attr("src", "bilder/motivationRed.png");
        $("#motivation").css("display", "block");
        $("#mot_text").text("Don't give up!");
      }
    }

    if (obstFrage == cherryCount) {
      if (antwort == "15") {
        $("#textOnBoard").text("Well Done!");
        $("#spielfeld_market").css("display", "none");
        $("#well_done_market").css("display", "block");
        $("#weiter_button").show();
        window.hasMoney = true;
        window.done_aufgaben++;
        $("#inventarErnte, #inventarLeer").hide();
        $("#inventarGeld").css("display","flex");
        claps_sound.play();

        $("#todoMarkt").attr("src", "bilder/checkmark.svg");

        return;
      } else {
        $("#price").val("");
        $("#mot_window").attr("src", "bilder/motivationRed.png");
        $("#motivation").css("display", "block");
        $("#mot_text").text("Fehler = Lernen");
      }
    }
  });
}
