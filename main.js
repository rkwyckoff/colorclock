

  function displayTime() {

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // This gets a "handle" to the clock div in our HTML
    var clockDiv = document.getElementById("clock");
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
 hours = parseInt(hours, 10);
 minutes = parseInt(minutes, 10);
 seconds = parseInt(seconds, 10);
 // Then we set the text inside the clock div
 // to the hours, minutes, and seconds of the current time

clockDiv.innerText = "#" + hours + minutes + seconds;

}

// remember that strings have a length, numbers don't
// can only turn numbers into hex, not strings!
//when seconds change set off a function to change the bckground color in css

  // var i = 0;
  // function change() {
  //   var doc = document.getElementById("clock");
  //
  //   doc.style.backgroundColor = "#000000"
     // must construct number with leading #, six digits, no colons
  //   i++;
  //   parseInt("054345", 10);
  //   console.log(i);
  //   }
//doc.style.backgroundColor = "#000000"
  // This runs the displayTime function the first time


  setInterval(displayTime, 1000);
  displayTime();
  //setInterval(change, 1000);
