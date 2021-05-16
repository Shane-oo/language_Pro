


//$('[id^=content-][name=content]').length;
//content next and previous
var counter = 1;
$('body').on('click', '.next', function() { 
  $('.content').hide();

  counter++;
  $('#content-'+counter+'').show();

  if(counter>1){
    $('.back').show();
  }
  //when module finised, content-number finished
  if(counter>$('[id^=content-][name=content]').length){
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
// Progress bars for module

var width = 0;
function move() {
    var elem = document.getElementById("module2Bar");
    console.log(elem)
      if (width<100) {
        var value = 100/($('[id^=content-][name=content]').length);
        width+=Math.round(value);
        // Math.round not reliable to add up to 100 exactly
        if(width > 90){
          width=100;
        }
        console.log(width)
        elem.style.width = width + "%";
        elem.innerHTML = width*1 + "%";
      }
}
function unmove(){
     
  var elem = document.getElementById("module2Bar");
  console.log(elem)
    if (width<100) {
      var value = 100/($('[id^=content-][name=content]').length);
      width-=Math.round(value);
      elem.style.width = width + "%";
      elem.innerHTML = width*1 + "%";
    }
  
}

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


//play sounds
var hola = new Audio("/static/sounds/hola.m4a"); 
var buenosDias = new Audio("/static/sounds/buenosDias.m4a");
var buenasTardes = new Audio("/static/sounds/buenasTardes.m4a");
var buenasNoches = new Audio("/static/sounds/buenasNoches.m4a");
var myNameIs = new Audio("/static/sounds/myNameIs.m4a"); 
var niceToMeetYou = new Audio("/static/sounds/niceToMeetYou.m4a"); 
var thisIs = new Audio("/static/sounds/thisIs.m4a");
var iAmFromAus = new Audio("/static/sounds/iAmFromAus.m4a")
var myNameIsShane = new Audio("/static/sounds/myNameIsShane.m4a"); 
var thisIsIffah = new Audio("/static/sounds/thisIsIffah.m4a");
var myNameIsShin = new Audio("/static/sounds/myNameIsShin.m4a");
var howAreYou = new Audio("/static/sounds/howAreYou.m4a");
var goodThanksYou = new Audio("/static/sounds/goodThanksYou.m4a");
var soSo = new Audio("/static/sounds/soSo.m4a");
var helloHowAreYou1 = new Audio("/static/sounds/helloHowAreYou1.m4a");
var adios = new Audio("/static/sounds/adios.m4a");
var chao = new Audio("/static/sounds/chao.m4a");