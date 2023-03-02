const myQuestions = [
  {
    question: "Javascript is _________ language.",
    answers: {
      a: "Programming",
      b: "Application",
      c: "None of These",
      d: "Scripting",
    },
    multi: false,
    correctAnswer: "d",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    answers: {
      a: "named function",
      b: "anonymous function",
      c: "both of the above",
      d: "none of the above",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question:
      "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
    answers: {
      a: "getIndex()",
      b: "location()",
      c: "indexOf()",
      d: "getLocation()",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question: "Which one of the following is valid data type of JavaScript",
    answers: {
      a: "number",
      b: "void",
      c: "boolean",
      d: "nothing",
    },
    multi: false,
    correctAnswer: "c",
  },
];
function question(index) {
  var qtitle = document.querySelector(".question-number");
  var qtext = document.querySelector(".question-text");
  qtitle.innerHTML = `Question ${index + 1} of 20:`;
  qtext.innerHTML = myQuestions[index].question;
  answer(index);
}
function answer(index) {
  let a = document.getElementsByClassName("answer");
  a[0].innerHTML = myQuestions[index].answers.a;
  a[1].innerHTML = myQuestions[index].answers.b;
  a[2].innerHTML = myQuestions[index].answers.c;
  a[3].innerHTML = myQuestions[index].answers.d;
}

var index = 0;
question(index);
var next = document.querySelector("#next-btn");
let i = 0;
next.addEventListener("click", function () {
  if (i + 1 < myQuestions.length) {
    question(i + 1);
    i++;
    enable("previous-btn");
  }
  if (i == myQuestions.length - 1) {
    sub.style.display = "initial"
    disable("next-btn");
  }
});

var pre = document.querySelector("#previous-btn");
pre.addEventListener('click', function () {
  if (i > 0) {
    question(i - 1);
    i--;
    enable("next-btn");
  }
  if (i == 0) disable("previous-btn");
});

var sub = document.querySelector("#submit-btn");
var ans = document.getElementsByName("answers");
var scr = document.querySelector(".score")
var score = document.querySelector("#score")
var tscore = 0
sub.addEventListener('click', function () {
  // if (ans[0].checked === false && ans[1].checked === false && ans[2].checked === false && ans[3].checked === false ) {
    
  // }
  scr.style.display = "initial"
  ans.forEach((an) => {
    if (ans.checked === true && an.value === myQuestions.correctAnswer) {
      tscore++
    }
  })
  score.innerHTML = tscore
})
function disable(string) {
  document.getElementById(string).disabled = true;
}
function enable(string) {
  document.getElementById(string).disabled = false;
}
