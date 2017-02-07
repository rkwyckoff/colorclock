

  function displayTime() {

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // This gets a "handle" to the clock div in our HTML
    var clockDiv = document.getElementById("clock");
  // var background = document.getElementById("#clock[background]");
// convert minutes, hours, secs to 2 digits if not already
if (hours < 10) {
  hours = "0" + hours;
}
   if (minutes < 10) {
    minutes = "0" + minutes;
}
  if (seconds < 10) {
  seconds = "0" + seconds;
}

clockDiv.innerHTML = "#" + hours + minutes + seconds

//background.innerHTML = clockDiv.innerHTML
// "clock.background-color"

// var nIntervId;
//
//     function changeColor() {
//       IntervId = setInterval(flashText, 1000);
//     }
//
//     function flashText() {
//       var Elem = document.getElementById("clock");
//       Elem.style.color = clockDiv.innerHTML
//     }
//   }

//     function changeColor () {
//
//     for(var i = 0; i < colors.length; i++) {
//         colors[i] = color;
//     }
//   }
// }
    //add the color to the element you want:
    // document.body.style.backgroundColor = "rgb("+colors[0] + "," + colors[1] + "," + colors[2] + ")";
    // console.log("event fired. color get:" + colors[0] + colors[1] + colors[2]);}
// remember that strings have a length, numbers don't
// can only turn numbers into hex, not strings!
//when seconds change set off a function to change the bckground color in css

//   var i = 0;
//   function change() {
//     var doc = document.getElementById("clock");
//
//     doc.style.backgroundColor = "#000000"
//
//     i++;
//
//  var doc = document.getElementById(#clock["background"] ;
// doc.style.clock.background = ""
//   This runs the displayTime function the first time

}
  setInterval(displayTime, 1000);
  displayTime();
  // "#clock background" = clockDiv.innerHTML;
  //setInterval(change, 1000);
