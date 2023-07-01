// This Javascript file includes opening slider, "dark and light mode" and text Animation, portfolio filter.

// Opening Slider
function openslider() {
    var str = document.querySelector(".menu").src;
    var n = str.lastIndexOf('/');
    var result = str.substring(n + 1);
    if (result == "menu.png") {
        document.querySelector(".content").style.opacity = 0.7;
        document.querySelector(".menu").src = "assets/images/other/cancel.png";
        document.querySelector(".list-group").style.width = "250px";
    } else if (result == "cancel.png") {
        closeslider();
    }
}
function closeslider(){
    document.querySelector(".list-group").style.width = "0px";
        document.querySelector(".content").style.opacity = 1.0;
        document.querySelector(".menu").src = "assets/images/other/menu.png";
}
//dark and light mode
function closemoon(moon) {
    if(moon === 0){moon = ".list-group"}else{moon = "nav"}

    if (document.querySelector(moon+" .moon").classList.value == 'moon fa-regular fa-moon') {
        document.querySelector(moon+" .moon").classList.remove("fa-moon");
        document.querySelector(moon+" .moon").classList.add("fa-sun");
        document.querySelector(moon+" .moon").classList.remove("fa-regular");
        document.querySelector(moon+" .moon").classList.add("fa-solid");
        document.querySelector("body").style.backgroundColor = "#1a1a1a";/*#332d2c*/
        document.querySelector("#profile").style.backgroundImage = "url('assets/images/background/skyscrapperdark.png')";
        document.querySelector("body").style.color = "#fff";
        document.querySelector(moon+" .moon").style.color = "#fff";
        form("#1a1a1a","#fff");
    } else if (document.querySelector(moon+" .moon").classList.value == 'moon fa-sun fa-solid') {
        document.querySelector(moon+" .moon").classList.add("fa-regular");
        document.querySelector(moon+" .moon").classList.remove("fa-solid");
        document.querySelector(moon+" .moon").classList.remove("fa-sun");
        document.querySelector(moon+" .moon").classList.add("fa-moon");
        document.querySelector("body").style.backgroundColor = "#fff";
        document.querySelector("#profile").style.backgroundImage = "url('assets/images/background/backgroundwhitetheme.png')";
        document.querySelector("body").style.color = "#000";
        document.querySelector(moon+" .moon").style.color = "rgb(36, 56, 92)";
        form("#fff","#1a1a1a");
    }
}
//dark and light mode in form
function form(mode,col){
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
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typed');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-typed-items');
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
    var x = window.matchMedia("(max-width: 868px)");
  
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
    //for not affecting menu bar button on smaller screen due to reveal animation.
    if(x.matches){
    setTimeout(function(){
        for (var i = 0; i < reveals.length; i++) {
            reveals[i].classList.remove("reveal");
        }
    }, 1000);
}
  }
  
  window.addEventListener("scroll", reveal);

  /*Filtering data list in portfolio */
  function list(a){
    document.querySelector("#portfolio-filters .filter-active").classList.remove("filter-active");
    document.querySelectorAll("#portfolio-filters li")[a].classList.add("filter-active");
    var b = document.querySelector("#portfolio-filters .filter-active").dataset.filter;
    var n = document.querySelectorAll(".portfolio-item").length;
    if(b === "*"){
        for(i=0;i<n;i++){
            document.querySelectorAll(".portfolio-item")[i].style.display = "flex";
        }
    }else{
        for(i=0;i<n;i++){
            if(document.querySelectorAll(".portfolio-item")[i].dataset.filter != b){
                document.querySelectorAll(".portfolio-item")[i].style.display = "none";
            }
            else{
                document.querySelectorAll(".portfolio-item")[i].style.display = "flex";
            }
        }
    }
  }
  