// ======================== MENU
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}

/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);

  if (!isClickInside && menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
  }
}
/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);






// ======================== TIME
function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); /* assigning hour in 12-hour format */
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + midday; /* adding time to the div */
      var t = setTimeout(currentTime, 1000); /* setting timer */
  }

  function updateTime(k) { /* appending 0 before time elements if less than 10 */
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  currentTime();




