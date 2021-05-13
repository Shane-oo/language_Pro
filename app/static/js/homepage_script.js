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