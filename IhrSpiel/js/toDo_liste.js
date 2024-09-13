$(document).ready(function () {
  var audio = document.getElementById("backgroundAudio");
    audio.pause();
  $("#sound img").click(function () {
    

    var currentSrc = $(this).attr("src");

    if (currentSrc === "bilder/sound.svg") {
      $(this).attr("src", "bilder/nosound.svg");

      audio.pause();
    } else {
      $(this).attr("src", "bilder/sound.svg");

      audio.play();
    }
  });
  $("#party_button").click(function () { audio.pause(); });
});
