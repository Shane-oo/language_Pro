var begin_button = document.querySelector(".start_button button");
var info_box = document.querySelector(".Information_box");
var quit_button = info_box.querySelector(".buttons .exit_button");
var restart_button = info_box.querySelector(".buttons .continue_button");
var quiz = document.querySelector(".quiz_section");
var countdown_time = quiz.querySelector(".quiz_time .second");
var times_up = quiz.querySelector("header .countdown");
var certificate = document.querySelector(".my-cert");

var quiz_options = document.querySelector(".quiz_options");

begin_button.onclick = () =>{
    info_box.classList.add("activeinformation");
}

quit_button.onclick = () =>{
    info_box.classList.remove("activeinformation");
}

restart_button.onclick = () =>{
    info_box.classList.remove("activeinformation");
    quiz.classList.add("activequiz");
    getting_questions(0);
    quiz_counter(1);
    Timer_start(15);
}

let question_count = 0;
let question_number = 1;
let counter;
let time_value = 15;
let user_results = 0;

var next_button = quiz.querySelector(".next_button");
var quiz_result = document.querySelector(".quiz_result");
var restart_quiz = quiz_result.querySelector(".buttons .continue_button");
var exit_quiz = quiz_result.querySelector(".buttons .exit_button");
var print_button = document.querySelector(".print_button .printit");


restart_quiz.onclick = ()=>{
    window.location.reload();
}

print_button.onclick = ()=>{
    window.print();
}

exit_quiz.onclick = ()=>{
    certificate.classList.add("activecert");
    quiz_result.classList.remove("activeresult");
    show_percentage();
} 

//when pressed next
next_button.onclick = () =>{
    if (question_count < questions.length - 1){
        question_count++;
        question_number++;
        getting_questions(question_count);
        quiz_counter(question_number);
        clearInterval(counter);
        Timer_start(time_value);
        next_button.style.display = "none";
        times_up.textContent = "Countdown timer";
    }
    else{
        clearInterval(counter);
        console.log("Questions completed");
        show_results();
    }
}

//getting questions from array 
function getting_questions(index){
    var quiz_question = document.querySelector(".quiz_question");
    let question_tag = '<span>' + questions[index].Number + ". " + questions[index].Question + '</span>';
    let options_tag = '<div class = "option">' + questions[index].Options[0] + '<span></span></div>'
                        + '<div class = "option">' + questions[index].Options[1] + '<span></span></div>'
                        + '<div class = "option">' + questions[index].Options[2] + '<span></span></div>'
                        + '<div class = "option">' + questions[index].Options[3] + '<span></span></div>';
    quiz_question.innerHTML = question_tag;
    quiz_options.innerHTML = options_tag;

    var option = quiz_options.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick","selected(this)");
    }
}

//putting icons in the quiz
let icon_tick = '<div class = "icon tick">&#10004;</div>';
let icon_cross = '<div class = "icon cross">&#10008;</div>';


function selected(answer){
    clearInterval(counter)
    let user_selected = answer.textContent;
    let correct_answer = questions[question_count].Answer;
    let total_options = quiz_options.children.length;
    if (user_selected == correct_answer){
        answer.classList.add("correct");
        user_results += 1;
        console.log(user_results);
        console.log("You are correct");
        answer.insertAdjacentHTML("beforeend", icon_tick);
    }
    else{
        answer.classList.add("incorrect");
        console.log("You are wrong");
        answer.insertAdjacentHTML("beforeend", icon_cross);


        //show them the right answer
        for (let i = 0; i < total_options; i++) {
            if (quiz_options.children[i].textContent == correct_answer){
                quiz_options.children[i].setAttribute("class", "option correct");
                quiz_options.children[i].insertAdjacentHTML("beforeend", icon_tick);
            }
        }
   }

    //disable other options after selecting answer
    for (let i = 0; i < total_options; i++) {
        quiz_options.children[i].classList.add("nomoreoptions");
    }
    next_button.style.display = "block";
}

function show_results(){
    info_box.classList.remove("activeinformation");
    quiz.classList.remove("activequiz");
    quiz_result.classList.add("activeresult");
    var score = quiz_result.querySelector(".score");
    let scoretag = '<span>You got <a>'+ user_results +'</a> out of <a>'+ questions.length +'</a> correct!</span>';
    score.innerHTML = scoretag;
}

function Timer_start(time){
    counter = setInterval(timer, 1000);
    function timer(){
        countdown_time.textContent = time;
        time--;
        if (time < 9){
            let add_zero = countdown_time.textContent;
            countdown_time.textContent = "0" + add_zero;
        }
        if (time < 0){
            clearInterval(counter);
            countdown_time.textContent = "00";
            times_up.textContent = "Times Up!";

            let correct_answer = questions[question_count].Answer;
            let total_options = quiz_options.children.length;

            for (let i = 0; i < total_options; i++) {
                if (quiz_options.children[i].textContent == correct_answer){
                    quiz_options.children[i].setAttribute("class", "option correct");
                    quiz_options.children[i].insertAdjacentHTML("beforeend", icon_tick);
                }
            }
            for (let i = 0; i < total_options; i++) {
                quiz_options.children[i].classList.add("nomoreoptions");
            }
            next_button.style.display = "block";
        }
    }
} 

//bottom quiz counter
function quiz_counter(index){
    var quiz_remaining = quiz.querySelector(".quiz_remaining");
    let quiz_remaining_tag = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>';
    quiz_remaining.innerHTML = quiz_remaining_tag;
}

//showing exact date on cert
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

function show_percentage(){
    var pre_precentage = certificate.querySelector(".outerlayer-cert");
    var pre_precentage2 = pre_precentage.querySelector(".innerlayer-cert");
    var percentage = pre_precentage2.querySelector(".mark-cert");
    let percentagetag = '<span>with result of <a>'+user_results/questions.length * 100 +'%</a></span>' 
    percentage.innerHTML = percentagetag;
}

//question bank
let questions = [
    {
        Number: 1,
        Question: "What is your name?",
        Answer: "I dont know",
        Options: [
            "I dont know",
            "hahah",
            "tell me",
            "just trying"
        ]
    },

    {
        Number: 2,
        Question: "Where do you live?",
        Answer: "I dont know",
        Options: [
            "I dont know",
            "what?",
            "privacy",
            "bleh"
        ]
    },

    {
        Number: 3,
        Question: "hahahha?",
        Answer: "I dont know",
        Options: [
            "I dont know",
            "heheh",
            "hohoh",
            "kukukuk"
        ]
    },

    {
        Number: 4,
    Question: "how many members?",
    Answer: "four of us",
    Options: [
        "1",
        "2",
        "3",
        "four of us"
        ]
    },

    {
        Number: 5,
    Question: "How to say ola",
    Answer: "ola",
    Options: [
        "loa",
        "ola",
        "aol",
        "oal"
        ]
    }



]