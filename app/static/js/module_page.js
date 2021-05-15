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



function saveProgress(){
  // Save progress
  //location.href="{{ url_for('user', email=current_user.email)}}"
  //Go back to module_page
  //location.href='module_page';
}


//content next and previous
var counter = 1;
$('body').on('click', '.next', function() { 
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
// Disable buttons if progress is not enough on Module Page
//window.onload= function(){
  //let buttons = document.querySelector(".start_button_text");
  //buttons.disabled = true;
//}

//play sounds
var hola = new Audio("/static/sounds/hola.m4a"); 
var buenosDias = new Audio("/static/sounds/buenosDias.m4a");
var buenasTardes = new Audio("/static/sounds/buenasTardes.m4a");
var buenasNoches = new Audio("/static/sounds/buenasNoches.m4a");