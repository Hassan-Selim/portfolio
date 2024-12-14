const navbar1 = document.querySelector(".navbar");
const navbar2 = document.querySelector(".navbar2");
const navbar3 = document.querySelector(".nav3");
const nav3 = document.querySelector(".navbar3");
const menu = document.getElementById("menu");
const close = document.getElementById("close");
const act = document.querySelector(".act");
const home = document.querySelector(".home");
const light = document.getElementById("light");
const dark = document.getElementById("dark");
const body = document.getElementById("body");
const about = document.querySelector(".about");
const up = document.getElementById("up");
let audio = new Audio("sus.mp3")

/* Change NavBar On Scroll */
window.onscroll = function () {
  let value = scrollY;
  if (scrollY >= 100) {
    (navbar1.style.display = "none"), (navbar2.style.display = "flex");
  } else if (scrollY < 100) {
    (navbar1.style.display = "flex"), (navbar2.style.display = "none");
  }

  if (scrollY >= 300) {
    up.style.display = "block";
  } else if (scrollY < 300) {
    up.style.display = "none";
    /* audio.play() */
  }
};

/* Show Menu NavBar */
function showNav() {
  navbar3.style.display = "block";
  menu.style.display = "none";
  close.style.display = "block";
}
function closeNav() {
  navbar3.style.display = "none";
  menu.style.display = "block";
  close.style.display = "none";
}
nav3.onmouseleave = function closeNav() {
  navbar3.style.display = "none";
  menu.style.display = "block";
  close.style.display = "none";
};

/* Change Mode */
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
    false
  );
}
const lang = document.querySelectorAll(".lang");
const lang2 = document.querySelectorAll(".ar");
function ar() {
  location.replace("arabic.html");
  
}
function EN() {
  location.replace("en.html");
}
const scroller = document.querySelector(".scroller");
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
