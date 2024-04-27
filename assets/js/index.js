// This Javascript file includes opening slider, "dark and light mode" and text Animation, portfolio filter.

//dark and light mode
function closemoon() {
  if (
    document.querySelector("nav .moon").classList.value ==
    "moon fa-regular fa-moon"
  ) {
    document.querySelector("nav .moon").classList.remove("fa-moon");
    document.querySelector("nav .moon").classList.add("fa-sun");
    document.querySelector("nav .moon").classList.remove("fa-regular");
    document.querySelector("nav .moon").classList.add("fa-solid");
    document
      .querySelector("nav a.moon")
      .setAttribute("title", "Switch to Light Mode");
    document.querySelector("body").style.backgroundColor =
      "#1a1a1a"; /*#332d2c*/
    document.querySelector("#profile").style.backgroundImage =
      "url('assets/images/background/skyscrapperdark.png')";
    document.querySelector("body").style.color = "#fff";
    document.querySelector("nav").style.backgroundColor = "#00a2ed"; /*149ddd*/
    document.querySelector(".logo").style.color = "#fff";
    document.querySelector("nav .moon").classList.add("text-white");
    // Get the navbar toggler icon element
    const navbarTogglerIcon = document.querySelector(
      ".navbar-dark .navbar-toggler-icon"
    );
    // Change the navbar toggler icon color
    navbarTogglerIcon.style.backgroundImage = `url('data:image/svg+xml;charset=utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="%23ffffff"><path stroke="%23ffffff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"/></svg>')`;
    document.querySelector(".navbar-dark .navbar-toggler").style.borderColor =
      "#fff";
    document.querySelector(".lista").classList.add("text-white");
    document.querySelector(".listaa").classList.add("text-white");
    document.querySelector(".listaaa").classList.add("text-white");
    document.querySelector(".listaaaa").classList.add("text-white");
    form("#1a1a1a", "#fff");
  } else if (
    document.querySelector("nav .moon").classList.value ==
    "moon fa-sun fa-solid text-white"
  ) {
    document.querySelector("nav .moon").classList.add("fa-regular");
    document.querySelector("nav .moon").classList.remove("fa-solid");
    document.querySelector("nav .moon").classList.remove("fa-sun");
    document.querySelector("nav .moon").classList.add("fa-moon");
    document
      .querySelector("nav a.moon")
      .setAttribute("title", "Switch to Dark Mode");
    document.querySelector("body").style.backgroundColor = "#fff";
    document.querySelector("#profile").style.backgroundImage =
      "url('assets/images/background/backgroundwhitetheme.png')";
    document.querySelector("body").style.color = "#000";
    document.querySelector(".logo").style.color = "#00a2ed";
    document.querySelector("nav").style.backgroundColor = "#eeeded";
    document.querySelector("nav .moon").classList.remove("text-white");
    // Get the navbar toggler icon element
    const navbarTogglerIcon = document.querySelector(
      ".navbar-dark .navbar-toggler-icon"
    );
    // Change the navbar toggler icon color
    navbarTogglerIcon.style.backgroundImage = `url('data:image/svg+xml;charset=utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="%2300a2ed"><path stroke="%2300a2ed" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"/></svg>')`;
    document.querySelector(".navbar-dark .navbar-toggler").style.borderColor =
      "#00a2ed";
    document.querySelector(".lista").classList.remove("text-white");
    document.querySelector(".listaa").classList.remove("text-white");
    document.querySelector(".listaaa").classList.remove("text-white");
    document.querySelector(".listaaaa").classList.remove("text-white");
    form("#fff", "#1a1a1a");
  }
}
//dark and light mode in form
function form(mode, col) {
  document.querySelector(".fname label").style.backgroundColor = mode;
  document.querySelector(".lname label").style.backgroundColor = mode;
  document.querySelector(".email label").style.backgroundColor = mode;
  document.querySelector(".sub label").style.backgroundColor = mode;
  document.querySelector(".message label").style.backgroundColor = mode;

  document.querySelector(".fname input").style.color = col;
  document.querySelector(".lname input").style.color = col;
  document.querySelector(".email input").style.color = col;
  document.querySelector(".sub input").style.color = col;
  document.querySelector(".message textarea").style.color = col;
}
//text animation
function con() {
  document.querySelector("input").style.borderColor = "skyblue";
}
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typed");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-typed-items");
    var period = 2000;
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typed > .wrap { border-right: solid #000000}";
  document.body.appendChild(css);
};
//scroll reveal..
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  // var x = window.matchMedia("(max-width: 868px)");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
  document.querySelector("#main-img").style.transform = "rotateY(720deg)";
  document.querySelector("#main-img").style.transition = "transform 0.8s";
  document.querySelector("#main-img").style.transform = "style(preserve-3d);";
  document.querySelector("#main-img").style.transform = "delay(0.8s);";
  //for not affecting menu bar button on smaller screen due to reveal animation.
  //     if(x.matches){
  //     setTimeout(function(){
  //         for (var i = 0; i < reveals.length; i++) {
  //             reveals[i].classList.remove("reveal");
  //         }
  //     }, 1000);
  // }
}

window.addEventListener("scroll", reveal);

/*Filtering data list in portfolio */
function list(a) {
  document
    .querySelector("#portfolio-filters .filter-active")
    .classList.remove("filter-active");
  document
    .querySelectorAll("#portfolio-filters li")
    [a].classList.add("filter-active");
  var b = document.querySelector("#portfolio-filters .filter-active").dataset
    .filter;
  var n = document.querySelectorAll(".portfolio-item").length;
  if (b === "*") {
    for (i = 0; i < n; i++) {
      document.querySelectorAll(".portfolio-item")[i].style.display = "flex";
    }
  } else {
    for (i = 0; i < n; i++) {
      if (document.querySelectorAll(".portfolio-item")[i].dataset.filter != b) {
        document.querySelectorAll(".portfolio-item")[i].style.display = "none";
      } else {
        document.querySelectorAll(".portfolio-item")[i].style.display = "flex";
      }
    }
  }
}
