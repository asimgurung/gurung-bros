var showCurrentTime = function() {
  var clock = document.getElementById("clock");

  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();

  var showTime = hours + ":" + minutes;
  clock.innerText = showTime;
};
showCurrentTime();
