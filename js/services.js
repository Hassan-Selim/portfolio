let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnails = document.querySelectorAll(".thumbnail .item");
let thumbnail = document.querySelectorAll(".thumbnail");

// config param
let countItem = items.length;
let itemActive = 0;

//hover showslider
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("mouseover", () => {
    itemActive = index;
    showSlider();
  });
});

// event next click

next.onclick = function () {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
};
// event prev click

prev.onclick = function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  showSlider();
};

// auto run slider

let refreshInerval = setInterval(() => {
  next.click();
}, 6000);

function showSlider() {
  //remove active old
  let itemActiveOld = document.querySelector(".slider .list .item.active");
  let thumbnailActiveOld = document.querySelector(".thumbnail .item.active");
  itemActiveOld.style.color = "red";
  itemActiveOld.classList.remove("active");
  thumbnailActiveOld.classList.remove("active");
  // active new item
  items[itemActive].classList.add("active");
  thumbnails[itemActive].classList.add("active");z
  
 
}

// clearauto run slider
clearInterval(refreshInerval);
refreshInerval = setInterval(() => {
  next.click();
}, 8000);

// thumbnail on click
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    itemActive = index;
    showSlider();
  });
});

// menu navbar
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const navMenu = document.querySelector(".menuNav");

function openmenu() {
  navMenu.style.display = "grid";
  closeMenu.style.display = "block";
  closeMenu.style.background = "none";
  openMenu.style.display = "none";
}

function closemenu() {
  navMenu.style.display = "none";
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
}