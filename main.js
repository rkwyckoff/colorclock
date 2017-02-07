

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

clockDiv.innerHTML = "#" + hours + minutes + seconds
// change css style background-color dynamically thru html
clockDiv.style.backgroundColor = "#" + hours + minutes + seconds;
}
  setInterval(displayTime, 1000);
  displayTime();

  //setInterval(change, 1000);
