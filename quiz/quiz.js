const myQuiz = [
    {
        question: "What does HTML stand for?",
        choices: {
            a: "Hyper Text Markup Language",
            b: "Hot Mail",
            c: "How to Make Lasagna"
        },
        answer: "a"
    },
    {
        question: " How many tags are in a regular element?",
        choices: {
            a: "2",
            b: "1",
            c: "3"
        },
        answer: "a"
    },
    {
        question: " what is the difference in an opening tag and a closing tag?",
        choices: {
            a: "Opening tag has a / in front",
            b: "Closing tag has a / in front",
            c: "There is no difference"
        },
        answer: "b"
    },
    {
        question: " < br  / > What type of tag is this?",
        choices: {
            a: "Break tag",
            b: "A broken one",
            c: "An opening tag"
        },
        answer: "a"
    }

];

var randomQuestions = [];
var question = null;
var val = null;
var quesIndex = 0;
var inputAns = null;
var rightAnsCounter = 0;
var quesCount = 0;

shuffleQuestion(); 

function shuffleQuestion(){
    randomQuestions = myQuiz.sort(() => Math.random() - 0.5);
    quesCount = randomQuestions.length;
}
function startQuiz(){ 
    question = randomQuestions[0];
    console.log(question.question);
    console.log(question.choices);
    inputAns = prompt("Your answer is?");
    console.log("You have answer : " + inputAns);
    checkAnswer();
    randomQuestions.shift();      
    if(randomQuestions.length === 0){
        result();
    }else{
        startQuiz();
    } 
}
function checkAnswer(){
    if(question.answer === inputAns){
        console.log("Your answer is right");
        rightAnsCounter += 1;

    }else{
        console.log("Your answer is wrong!");
    }
}
function result(){
    console.log("you have " + rightAnsCounter + " correct answer out of " + quesCount + " questions! Goodjob...");
}