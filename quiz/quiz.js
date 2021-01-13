const myQuiz = [
    //1
    {
        question: "What does HTML stand for?",
        choices: {
            a: "Hyper Text Markup Language",
            b: "Hot Mail",
            c: "How to Make Lasagna"
        },
        answer: "a"
    },
    //2
    {
        question: " How many tags are in a regular element?",
        choices: {
            a: "2",
            b: "1",
            c: "3"
        },
        answer: "a"
    },
    // 3
    {
        question: " what is the difference in an opening tag and a closing tag?",
        choices: {
            a: "Opening tag has a / in front",
            b: "Closing tag has a / in front",
            c: "There is no difference"
        },
        answer: "b"
    },
    // 4
    {
        question: " < br  / > What type of tag is this?",
        choices: {
            a: "Break tag",
            b: "A broken one",
            c: "An opening tag"
        },
        answer: "a"
    },
    // 5
    {
        question: "< body > Is this an opening tag or a closing tag?",
        choices: {
            a: "Opening",
            b: "Closing",
            c: "Not sure!"
        },
        answer: "a"
    },
    // 6
    {
        question: "< / body > Is this an opening tag or a closing tag?",
        choices: {
            a: "Opening",
            b: "Not sure!",
            c: "Closing"
        },
        answer: ""
    },
    // 7
    {
        question: "where is the meta tag only found?",
        choices: {
            a: "The last page",
            b: "The home page",
            c: "The second page"
        },
        answer: "b"
    },
    // 8
    {
        question: "which is the correct way to tag an image?",
        choices: {
            a: "src=”image.jpg/gif” alt=”type some text”",
            b: "Src=”image.jpg/gif” alt=”type some text”",
            c: "<img src=”image.jpg/gif” alt=”type some text”>"
        },
        answer: "c"
    },
    // 9
    {
        question: "What is an element that does not have a closing tag called?",
        choices: {
            a: "Tag",
            b: "Empty element",
            c: "Closed element"
        },
        answer: "b"
    },
    // 10
    {
        question: "Which of the following is an example of an empty element?",
        choices: {
            a: "<img/>",
            b: "<img> </img >",
            c: "<img>"
        },
        answer: "c"
    },
    // 11
    {
        question: "What should values always be enclosed in?",
        choices: {
            a: "Quotation marks",
            b: "Commas",
            c: "Parenthesis"
        },
        answer: "a"
    },
    // 12
    {
        question: "Where do all items for the same web site need to be saved?",
        choices: {
            a: "In the same folder",
            b: "Where ever is fine",
            c: "In different folders"
        },
        answer: "a"
    },
    // 13
    {
        question: "What does < a  href = ”http://www.google.com“  title=”Link to Google” target= ”_blank”> Google</a> do?",
        choices: {
            a: "Adds a link to google on the page",
            b: "Adds a search engine to the page",
            c: "Nothing"
        },
        answer: "a"
    },
    //14
    {
        question: "What is always a welcome page, and explains the purpose or topic of the site?",
        choices: {
            a: "Page 4",
            b: "Homepage",
            c: "Table of contents"
        },
        answer: "b"
    },
    // 15
    {
        question: "What does View Source do?",
        choices: {
            a: "Nothing",
            b: "Brings up a note pad with the HTML code already used for the site.",
            c: "Opens a new website."
        },
        answer: "b"
    }
];

var randomQuestions = [];
var question = null;
var val = null;
var quesIndex = 0;
var inputAns = null;
var rightAnsCounter = 0;
var quesCount = 0;
var steak = 0;

shuffleQuestion(); 

function shuffleQuestion(){
    randomQuestions = myQuiz.sort(() => Math.random() - 0.5);
}
function startQuiz(){ 
    shuffleQuestion();
    question = randomQuestions[0];
    console.log(question.question);
    console.log(question.choices);
    inputAns = prompt("enter your answer or type exit to quit");    
    console.log("You have input : " + inputAns);
    
    // randomQuestions.shift();      
    if(inputAns === 'exit' || inputAns === 'exit'.toUpperCase){
        result();
    }else{
        quesCount++;
        checkAnswer();
        nextRandQuestion();
    } 
}
function nextRandQuestion() {
    shuffleQuestion();
    startQuiz();
}
function checkAnswer(){
    if(question.answer === inputAns){
        console.log("Your answer is right");
        rightAnsCounter += 1;
        steak++
        if(steak % 5 === 0) {
            alert("Your are now in a " + steak + " point steak!");
        }

    }else{
        console.log("Your answer is wrong!");
        steak = 0;
    }
}
function result(){
   alert("you have " + rightAnsCounter + " correct answer out of " + quesCount + " questions! BYE!...");
   resetQuiz();
}
function resetQuiz() {
    randomQuestions = [];
    question = null;
    val = null;
    quesIndex = 0;
    inputAns = null;
    rightAnsCounter = 0;
    quesCount = 0;
    steak = 0;
}