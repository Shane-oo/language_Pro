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
// Progress bars inside accordions
function move() {
    var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("module1Bar");
    console.log(elem)
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
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
    if(counter>3){
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
  