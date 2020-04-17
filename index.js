// $("button.sound").click(function () {
//   var clickedButton = $(this).attr("class");
//   console.log(clickedButton);
// });


$("button.sound").click(function() {
  var clickedButton = $(this).attr("class");
  console.log(clickedButton);
  playSound(clickedButton);

})

// CLICKED ANIMATION

// function animate(button) {
//         var activeButton = $("." + button)
//         activeButton.addClass("clicked");
//     setTimeout(function() {
//         activeButton.removeClass("clicked");
//       }, 100);
//   };


function playSound(button) {

  switch (button) {
    case "col-lg-2 col-md-4 col-sm-6 sound roundabout":
      var roundAbout = new Audio("sounds/roundabout.mp3");
      roundAbout.play();
      // Roundabout animation
      setTimeout(function() {
        $("body").addClass("to-be-continued");
      }, 4500);
      setTimeout(function() {
        $("body").removeClass("to-be-continued");
      }, 10500);


      break;

    case "col-lg-2 col-md-4 col-sm-6 sound kono-dio-da":
      var konoDioDa = new Audio("sounds/kono-dio-da99.mp3");
      konoDioDa.play();
      break;

    case "col-lg-2 col-md-4 col-sm-6 sound nice":
      var nice = new Audio("sounds/joseph-joestar-nice.mp3");
      nice.play();
      break;

    case "col-lg-2 col-md-4 col-sm-6 sound ayayay":
      var ayayay = new Audio("sounds/jojos-bizarre-adventure-ay-ay-ay-ay-_-sound-effect.mp3")
      ayayay.play();
      break;

    case "col-lg-2 col-md-4 col-sm-6 sound shiza":
      var shiza = new Audio("sounds/shizaaaaaa.mp3");
      shiza.play();
      break;

    case "col-lg-2 col-md-4 col-sm-6 sound oh-no":
      var ohNo = new Audio("sounds/oh-no_7.mp3");
      ohNo.play();
      break;

    case "col-lg-2 col-md-4 col-sm-6 sound oh-my-god":
      var ohMyGod = new Audio("sounds/oh-my-god-jojo.mp3");
      ohMyGod.play();
      break;

    case "col-lg-2 col-md-4 col-sm-6 sound rero":
      var rero = new Audio("sounds/rero-rero-rero.mp3");
      rero.play();
      break;

    case "col-lg-2 col-md-4 col-sm-6 sound yes-i-am":
      var yesIAm = new Audio("sounds/yes-i-am.mp3");
      yesIAm.play();
      break;

    case "col-lg-2 col-md-4 col-sm-6 sound jotaro-no":
      var noNoNo = new Audio("sounds/jotaro-no.mp3");
      noNoNo.play();
      break;

    case "col-lg-2 col-md-4 col-sm-6 sound zawarudo":
      var zawarudo = new Audio("sounds/za-warudo-stop-time-sound.mp3");
      zawarudo.play();
      // Za Warudo Time stop Animation

      setTimeout(function() {
        $("body").addClass("time-stop");
      }, 2000);
      setTimeout(function() {
        $("body").removeClass("time-stop");
      }, 4000);

      break;

    case "col-lg-2 col-md-4 col-sm-6 sound fighting-gold":
      var fightingGold = new Audio("sounds/fighting-gold.mp3");
      fightingGold.play();

      break;

    default:
  }
}
