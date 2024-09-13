window.isPaula = false;
window.Easter_egg = false;
window.done_aufgaben = 0;
$("#sound").css("left", "1%");
$("#sound").css("top", "10px");
$("#start_button").mouseover(function () {
  $("#start_button_dunk").attr("src", "bilder/button_hell.png");
  $("#text_start_button").css("color", "rgb(200, 109, 136)");
});

$("#start_button").mouseout(function () {
  $("#start_button_dunk").attr("src", "bilder/button_dunk.png");
  $("#text_start_button").css("color", "white");
});

$("#start_button").click(function () {
  $("#sound").show();
  $("#start_page").css("display", "none");
  $("#choose_page").css("display", "block");
});

$("#natti_auswahl_button").mouseover(function () {
  $("#natti_auswahl_button").attr("src", "bilder/auswahl_active.png");
  $("#choose_natti").addClass("drop-shadow");
});

$("#natti_auswahl_button").mouseout(function () {
  $("#natti_auswahl_button").attr("src", "bilder/natti_auswählen.png");
  $("#choose_natti").removeClass("drop-shadow");
});

$("#paula_auswahl_button").mouseover(function () {
  $("#paula_auswahl_button").attr("src", "bilder/auswahl_active.png");
  $("#choose_paula").addClass("drop-shadow");
});

$("#paula_auswahl_button").mouseout(function () {
  $("#paula_auswahl_button").attr("src", "bilder/paula_auswählen.png");
  $("#choose_paula").removeClass("drop-shadow");
});

/* Natti_event */
$("#natti_auswahl_button").click(function () {
  window.isPaula = false;
  $("#choose_page").css("display", "none");
  $("#natti_event").css("display", "block");
  $("#scene_1").css("display", "block");
});

/* Paula_event */
$("#paula_auswahl_button").click(function () {
  window.isPaula = true;
  $("#garden_comment_np").attr("src", "bilder/paula_comment.webm");
  $("#choose_page").css("display", "none");
  $("#natti_event").css("display", "block");
  $("#scene_1").css("display", "block");
  $("#scene1_pic").attr("src", "bilder/Introszene1Paula.svg");
});

$("#weiter").click(function () {
  if (window.isPaula == true) {
    $("#scene2_pic").attr("src", "bilder/Introszene2Paula.svg");
    $("#video_scene2").attr("src", "bilder/paula_comment.webm");
    $("#dialogWindow_scene_2").css("left", "-670px");
    $("#dialogWindow_scene_2").css("top", "295px");
    $("#video_scene2").css("width", "500px");
    $("#video_scene2").css("height", "500px");
    $("#guten_morgen_natti").css("top", "201px");
  }
  $("#scene_1").css("display", "none");
  $("#scene_2").css("display", "block");
});
$("#kalender_bild").mouseout(function () {
  $("#kalender_bild").removeClass("drop-shadow");
});

$("#kalender_bild").mouseover(function () {
  $("#kalender_bild").addClass("drop-shadow");
});
$("#kalender_bild").click(function () {
  $("#scene_2").css("display", "none");
  if (window.isPaula) {
    $("#scene_pic3").attr("src", "bilder/scene3_paula.svg");
    $("#video_scene3").attr("src", "bilder/paula_shocked.webm");
    $("#text_scene_3").html(
      "Oh nein! Mein Papagei Luigi hat morgen Geburtstag!<br />Ich habe das ganz vergessen.<br />Wie soll ich denn heute noch eine ganze Party auf die Beine stellen? Kannst du mir dabei helfen?"
    );
  }
  $("#scene_3").css("display", "block");
});

$("#ja_helfen").click(function () {
  $("#scene_3").hide();
  if (window.isPaula) {
    $("#video_scene4").attr("src", "bilder/paula_comment.webm");
    $("#dialogWindow_scene_4").css("left", "-670px");
    $("#dialogWindow_scene_4").css("top", "295px");
    $("#video_scene4").css("width", "500px");
    $("#video_scene4").css("height", "500px");
    $("#scene4_to_do_natti").css("top", "201px");
  }
  $("#scene_4").show();
  $("#toDo_liste").addClass("drop-shadow");
});

$("#lets_go").click(function () {
  $("#scene_4").hide();
  if (window.isPaula) {
    $("#character_walkImg").attr("src", "bilder/paula.svg");
    $("#character_walkImg").css("width", "160px");
    $("#character_walk").css("top", "466px");
    $("#lui").show();
    $("#karte_herz").css("left", "52.8%");
  } else $("#may").show();
  $("#map").show();
  $("#sound").css("left", "7%");
  $("#sound").css("top", "26px");
  $("#backToMenu_button").show();
  $("#todolist").show();
  $("#inventarlist").css("display", "flex");
  $("#inventarlist li").hide();
  $("#inventarLeer").show();
});

// Lösche den Speicher für den Memory-Spielgewinn zu Beginn des Spiels
localStorage.removeItem("memoryGameWon");
