


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
var tenCents = new Audio("/static/sounds/tenCents.m4a");
var twentyCents = new Audio("/static/sounds/twentyCents.m4a");
var fiftyCents = new Audio("/static/sounds/fiftyCents.m4a");
var oneDollar = new Audio("/static/sounds/oneDollar.m4a");
var fiveDollars = new Audio("/static/sounds/fiveDollars.m4a");
var tenDollars = new Audio("/static/sounds/tenDollars.m4a");
var twentyDollars = new Audio("/static/sounds/twentyDollars.m4a");
var fiftyDollars = new Audio("/static/sounds/fiftyDollars.m4a");
var hundredDollars = new Audio("/static/sounds/hundredDollars.m4a");
var twoHundredDollars = new Audio("/static/sounds/twoHundredDollars.m4a");
var oneThousandDollars = new Audio("/static/sounds/oneThousandDollars.m4a");
var whatTimeIsIt = new Audio("/static/sounds/whatTimeIsIt.m4a");
var doYouHaveTheTime = new Audio("/static/sounds/doYouHaveTheTime.m4a");
var itsOneOClock = new Audio("/static/sounds/itsOneOClock.m4a");
var itsTwoOClock = new Audio("/static/sounds/itsTwoOClock.m4a");
var itsThreeOClock = new Audio("/static/sounds/itsThreeOClock.m4a");
var itsFourOClock = new Audio("/static/sounds/itsFourOClock.m4a");
var itsFiveOClock = new Audio("/static/sounds/itsFiveOClock.m4a");
var itsSixOClock  = new Audio("/static/sounds/itsSixOClock.m4a");
var itsSevenOClock = new Audio("/static/sounds/itsSevenOClock.m4a");
var itsEightOClock = new Audio("/static/sounds/itsEightOClock.m4a");
var itsNineOClock = new Audio("/static/sounds/itsNineOClock.m4a");
var itsTenOClock = new Audio("/static/sounds/itsTenOClock.m4a");
var itsElevenOClock = new Audio("/static/sounds/itsElevenOClock.m4a");
var itsTwelveOClock = new Audio("/static/sounds/itsTwelveOClock.m4a");
var itsNoon = new Audio("/static/sounds/itsNoon.m4a");
var itsMidnight = new Audio("/static/sounds/itsMidnight.m4a");
var whereAreYou = new Audio("/static/sounds/whereAreYou.m4a");
var whenAreWeLeave = new Audio("/static/sounds/whenAreWeLeave.m4a");
var whoAreYouLivingWith = new Audio("/static/sounds/whoAreYouLivingWith.m4a");
var whatIsThat = new Audio("/static/sounds/whatIsThat.m4a");
var whatMovie = new Audio("/static/sounds/whatMovie.m4a");