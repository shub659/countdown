var countDownDate = new Date("May 2, 2020 12:00:00 AM").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("Me").innerHTML =
    days +
    " day " +
    hours +
    " hours " +
    minutes +
    " minutes " +
    seconds +
    " seconds ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Me").innerHTML = "<br> <a href='https://shub659.github.io/virtual/'>Get Cake</a> Click Here and Get Your Gift  <a href='https://shub659.github.io/poojabday/'>Visit site</a>";
  }
}, 1000);

var countDownDateK = new Date("May 2, 2020 12:02:00 AM").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();

  var distance = countDownDateK - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("Pooja").innerHTML =
    days +
    " day " +
    hours +
    " hours " +
    minutes +
    " minutes " +
    seconds +
    " seconds ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Pooja").innerHTML = "HAPPY BIRTHDAY Pooja !! ";
  }
}, 1000);
