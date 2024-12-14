const btn1 = document.querySelector(".btn1");
const chatBox = document.querySelector(".chat");
const close = document.querySelector(".close");

body.classList.add(localStorage.getItem("setTheme" || "light"));

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
    true
  );
}

function chat() {
  chatBox.style.display = "flex";
}
function closeChat(){
  chatBox.style.display = "none";
}
