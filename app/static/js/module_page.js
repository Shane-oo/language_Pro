window.onload = function() {

var acc = document.getElementsByClassName("accordion");
var i;
console.log(acc)
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
    }



}
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
