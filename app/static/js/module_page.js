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

// Progress bars for module
var width = 0;
function move() {
   
    var elem = document.getElementById("module2Bar");
    console.log(elem)
      if (width<100) {
        width+=25
        elem.style.width = width + "%";
        elem.innerHTML = width*1 + "%";
      }
}
function unmove(){
     
  var elem = document.getElementById("module2Bar");
  console.log(elem)
    if (width<100) {
      width-=25;
      elem.style.width = width + "%";
      elem.innerHTML = width*1 + "%";
    }
  
}
//window.onload = function() {
  //updateProgressBars();
//}

function updateProgressBars(){
  var progressVal = document.getElementById("progress");
  progressVal.innerHTML = progressVal.textContent;
 
  value = progressVal.innerHTML;
  var prefix = 'moduleBar';
  
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

//content next and previous
var counter = 1;
$('.moduleLearn').on('click', '.next', function() { 
  $('.content').hide();

  counter++;
  $('#content-'+counter+'').show();

  if(counter>1){
    $('.back').show();
  }
  //when module finised
  if(counter>4){
    $('.wordLearn').hide();
    $('.end').show();
  };
});
//clicked previous
$('body').on('click','.back',function(){
  counter--;
  $('.content').hide()
  var id = counter;
  $('#content-'+id).show();
    if(counter<2){
      $('.back').hide();
    }

});

// Show Results
window.onload = function() {
  if(document.getElementById("form4")!=null){
document.getElementById("form4").onsubmit=function() {
  //check that all questions are answered
  for(var i = 1 ; i <= 3 ; i++)
  {
      var radios = document.getElementsByName('question'+i);
      var checked = false;
      for (var j = 0, length = radios.length; j < length; j++) 
      {

         if (radios[j].checked) 
         {
          checked = true;
          break;
         }


       }
       if(!checked)
       {
         alert('Please answer question '+i);
         
         return false; //stops page from refreshing
       }
}
  if(checked==true){
  question1Res = parseInt(document.querySelector('input[name = "question1"]:checked').value);
  question2Res = parseInt(document.querySelector('input[name = "question2"]:checked').value);
  question3Res = parseInt(document.querySelector('input[name = "question3"]:checked').value);
  }
 
  result = question1Res+question2Res+question3Res;
  
  if(result == 99){
    result =100;
  }
  document.getElementById("grade").innerHTML = result;
  return false; //stops page from refreshing

}
}
}
// Disable buttons if progress is not enough on Module Page

    //location.href = 'learnHello'
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
        location.href = 'learnHello';
        break;
      }
    case 3:
      if(progressVal.innerHTML<2){
        alert("Module Not Unlocked Please Complete Above Modules")
        break;
      }
      else{
        location.href = 'learnHello';
        break;
      }
    case 4:
      if(progressVal.innerHTML<3){
        alert("Module Not Unlocked Please Complete Above Modules")
        break;
      }
      else{
        location.href = 'learnHello';
        break;
      }
    case 5:
    if(progressVal.innerHTML<3){
      alert("Module Not Unlocked Please Complete Above Modules")
      break;
    }
    else{
      location.href = 'learnHello';
      break;
    }
    case 6:
      if(progressVal.innerHTML<3){
        alert("Module Not Unlocked Please Complete Above Modules")
        break;
      }
      else{
        location.href = 'learnHello';
        break;
      }
  }

}

  //document.getElementById("startBut1gra").innerHTML = "result";

//play sounds
var hola = new Audio("/static/sounds/hola.m4a"); 
var buenosDias = new Audio("/static/sounds/buenosDias.m4a");
var buenasTardes = new Audio("/static/sounds/buenasTardes.m4a");
var buenasNoches = new Audio("/static/sounds/buenasNoches.m4a");
