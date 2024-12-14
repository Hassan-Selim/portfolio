const light = document.getElementById("light");
const dark = document.getElementById("dark");
const body = document.getElementById("body");



/* Change Mode */
body.classList.add(localStorage.getItem("setTheme" || 'light'));

var mode = document.querySelectorAll(".settheme i");
var classesList = [];

for (var i = 0; i < mode.length; i++) {
  classesList.push(mode[i].getAttribute("data-theme"));
  mode[i].addEventListener(
    "click",
    function () {
      body.classList.remove(...classesList);

      body.classList.add(this.getAttribute("data-theme"));

      localStorage.setItem("setTheme", this.getAttribute("data-theme"));
    },
    false
  );
}