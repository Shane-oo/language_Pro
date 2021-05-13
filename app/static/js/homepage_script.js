// NAV BAR FUNCTION
function burger() {
    var x = document.getElementById("newTopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
    }
}

// QUOTE OF THE DAY RANDOM
var phrase = ["Mucha mierda - Break a leg", "Ponerse las pilas",
     "Hablar por los codos", "Estar piripi", "Echar una mano"];
window.onload = function sentence(){
    var rand = Math.floor(Math.random() * 5);
    document.getElementById("sentence").innerHTML = phrase[rand];
}

function sentenceNew(){
    prePhrase = document.getElementById("sentence").innerHTML;
    var rand = Math.floor(Math.random() * 5);
    var content = phrase[rand];
    if (prePhrase == content) {
        sentenceNew();
    } else { 
        document.getElementById("sentence").innerHTML = phrase[rand]; 
    }
}

/*// SLIDE SHOW 
var slideIndex = 1;
    showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
*/
