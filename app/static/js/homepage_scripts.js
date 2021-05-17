// NAV BAR FUNCTION
function burger() {
    var x = document.getElementById("newTopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
    }
}

// SLANG OF THE DAY RANDOM
<<<<<<< Updated upstream
var phrase = ["Mucha mierda - Break a leg", "Ponerse las pilas - Get Cracking",
            "Hablar por los codos - To Be A Chatterbox", "Estar piripi - To Be Tipsy", 
            "Echar una mano - To Help Someone Out", "Piola - Cool", "Fome - Boring", 
            "Dejar plantado / dar plantón - To Stand Someone Up", 
            "En un abrir y cerrar de ojos - In The Blink Of An Eye",
            "Otro gallo cantaría - Things Could Have Been Different",
            "¿Qué huele? - Whats Up?", "¡Cómo mola! - Cool!"];


=======
var phrase = ["Mucha mierda - Break a leg", "Ponerse las pilas - Get cracking",
            "Hablar por los codos - to be a chatterbox", "Estar piripi - to be tipsy", 
            "Echar una mano - to help someone out", "Piola - Cool", "Fome - Boriong", 
            "Dejar plantado / dar plantón - to stand someone up", 
            "En un abrir y cerrar de ojos - in the blink of an eye",
            "Otro gallo cantaría - things could have been different",
            "¿Qué huele? - Whats Up?", "¡Cómo mola! - Cool",];
    window.onload = function sentence(){
        var rand = Math.floor(Math.random() * 5);
        document.getElementById("sentence").innerHTML = phrase[rand];
    }
>>>>>>> Stashed changes

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