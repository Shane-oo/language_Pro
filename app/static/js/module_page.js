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

//play sounds
var hola = new Audio("/static/sounds/hola.m4a"); 
var buenosDias = new Audio("/static/sounds/buenosDias.m4a");
var buenasTardes = new Audio("/static/sounds/buenasTardes.m4a");
var buenasNoches = new Audio("/static/sounds/buenasNoches.m4a");