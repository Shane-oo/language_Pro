//Function for accordions on module_page
window.onload = function() {
var acc = document.getElementsByClassName("accordion");
var i;
console.log(acc)
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
    }

    updateProgressBars();
}



function updateProgressBars(){
  var progressVal = document.getElementById("progress");
  progressVal.innerHTML = progressVal.textContent;
 
  value = progressVal.innerHTML;
  var prefix = 'moduleBar';
  var width = 0;
  for(var i = 1; elem = document.getElementById(prefix + i); i++) {
    // Module is complete
    console.log(value)
    if(value>=i) {
      width+=100;
      elem.style.width = width + "%";
      elem.innerHTML = "Complete";
    }
    width =0;
    var nextModule = parseInt(value)+1;
    console.log(nextModule)
    // Module ready to begin
    if(nextModule == i){
      console.log(i)
      width+=100;
      elem.style.width = width + "%";
      elem.innerHTML = "Ready To Start";
      elem.style.backgroundColor = "#f1a165";
    }
    else if(value<i){
      width+=100;
      elem.style.width = width + "%";
      elem.innerHTML = "Not Unlocked";
      elem.style.backgroundColor = "grey";
    }

}
}


//MODULES

function startHandler(moduleClicked){
  
  var progressVal = document.getElementById("progress");
  progressVal.innerHTML = progressVal.textContent;
  console.log(progressVal.innerHTML) 
  switch(moduleClicked){
    case 1:
      //Does not need progress to be greater than anythin
      location.href = 'learnHello';
      break;
    case 2:
      if(progressVal.innerHTML<1){
        alert("Module Not Unlocked Please Complete Above Modules")
        break;
      }
      else{
        location.href = 'learnIntroduce';
        break;
      }
    case 3:
      if(progressVal.innerHTML<2){
        alert("Module Not Unlocked Please Complete Above Modules")
        break;
      }
      else{
        location.href = 'learnHowAreYou';
        break;
      }
    case 4:
      if(progressVal.innerHTML<3){
        alert("Module Not Unlocked Please Complete Above Modules")
        break;
      }
      else{
        location.href = 'learnGoodbye';
        break;
      }
    case 5:
    if(progressVal.innerHTML<4){
      alert("Module Not Unlocked Please Complete Above Modules")
      break;
    }
    else{
      location.href = 'learnNumbers';
      break;
    }
    case 6:
      if(progressVal.innerHTML<5){
        alert("Module Not Unlocked Please Complete Above Modules")
        break;
      }
      else{
        location.href = 'learnSimpleQuestions';
        break;
      }
  }

}


//play sounds
var hola = new Audio("/static/sounds/hola.m4a"); 
var buenosDias = new Audio("/static/sounds/buenosDias.m4a");
var buenasTardes = new Audio("/static/sounds/buenasTardes.m4a");
var buenasNoches = new Audio("/static/sounds/buenasNoches.m4a");
