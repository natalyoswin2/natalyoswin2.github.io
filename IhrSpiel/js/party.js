$("#party_button").mouseout(function () {
  $("#party_button").removeClass("drop-shadow");
});

$("#party_button").mouseover(function () {
  $("#party_button").addClass("drop-shadow");
});

var happy_birthday = new Audio("sound/happy_birthday.mp3");
$("#party_button").click(function () {
  $("#partyEnde").show();
  $("#map").hide();
  $("#Minispiel_Market").hide();
  $("#Minispiel_Garden").hide();
  $("#Minispiel_Dekoshop").hide();
  $("#todolist").hide();
  $("#inventarlist").hide();
  $("#Minispiel_Post").hide();
  $("#Minispiel_memory").hide();
  $("#Minispiel_keller").hide();
  $("#weiter_button").hide();
  $("#haus_eingang").hide();
  $("#backToMenu_button").hide();
  $("#sound").hide();

  happy_birthday.play();
  
  if (window.Easter_egg) {
    $("#party_vid").attr("src", "bilder/party_with_Bröckelmann.webm");
  }
});

$("#neustart").click(function () { 
  happy_birthday.pause();
  localStorage.clear();
  sessionStorage.clear();

  // Neuladen der Seite
  location.reload();
});