var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0 ; i < numberOfDrumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener ("click",function () {

     var exp = this.innerHTML;
     key(exp);
     buttonAnimation(exp);

  });
}
document.addEventListener("keypress",function (event) {
  key(event.key);
  buttonAnimation(event.key);
});


function key(exp) {
  switch (exp) {
    case "w":
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
      break;
      case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
        break;
        case "s":
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
          break;
          case "d":
          var audio = new Audio('sounds/tom-4.mp3');
          audio.play();
            break;
            case "j":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
              break;
              case "k":
              var audio = new Audio('sounds/kick-bass.mp3');
              audio.play();
                break;
                case "l":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                  break;
    default:
    console.log("oopss");

  }
}
function buttonAnimation(keypress) {
 var act =  document.querySelector("."+keypress);
 act.classList.add("pressed");

 setTimeout(function () {
   act.classList.remove("pressed");
 },100);
}
