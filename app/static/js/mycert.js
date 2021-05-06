
function GetDate() {
    var datenow = new Date();
    var year = datenow.getFullYear();
    var month = datenow.getMonth();
    var daym =datenow.getDate();
    var montharray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
    var result = document.getElementById("demo");
    result.textContent = ""+daym+ " "+montharray[month]+ " "+year;
    result.innerText = ""+daym+ " " +montharray[month]+ " "+year;
}
GetDate(); 