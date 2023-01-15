const questions = [
    {
      question: "What's my favorite color?",
      choices: ["Blue", "Green", "Gray", "Black"],
      answer: "Green"
    },
    {
      question: "What is my cat name?",
      choices: ["Kouka", "Mimi", "Mouka", "Léo"],
      answer: "Mouka"
    },
    {
      question: "What is my favorite food?",
      choices: ["Pizza", "Pasta", "Chiken Nuggets", "Chawarma"],
      answer: "Pizza"
    },
    {
      question: "how many sisters i have?",
      choices: ["3", "2", "1", "None"],
      answer: "1"
    },
    {
      question: "For how long I've been training?",
      choices: ["1year", "3years", "+5years", "You don't train"],
      answer: "+5years"
    },
    {
      question: "Am i right handed or left handed?",
      choices: ["Right", "Left"],
      answer: "Right"
    },
    {
      question: "which language I don't speak?",
      choices: ["Spanish", "German", "French", "Arabic"],
      answer: "German"
    },
    {
      question: "Am I an Android or iPhone person?",
      choices: ["Android User", "Iphone User"],
      answer: "Android User"
    },
    {
      question: "I was born in which month?",
      choices: ["April", "September", "January", "June"],
      answer: "January"
    },
    {
      question: "I was born in which year?",
      choices: ["1999", "2001", "2000", "1998"],
      answer: "2000"
    }
  ];
  let correctAnswers = []
  let currentQuestion = 0;
  let score = 0;
  
  function displayQuestion() {
    const question = questions[currentQuestion];
    const choices = question.choices;
  
    document.querySelector("#question").textContent = question.question;
    document.querySelector("#choices").innerHTML = "";
  
    for (let i = 0; i < choices.length; i++) {
      const choice = choices[i];
      const div = document.createElement("div");
      div.innerHTML = `<input type="radio" name="choice" value="${choice}"> ${choice}`;
      document.querySelector("#choices").appendChild(div);
    }
  
    document.querySelector("#submit").style.display = "block";
  }
  
  function checkAnswer() {
    const choice = document.querySelector("input[name=choice]:checked").value;
    if (choice === questions[currentQuestion].answer) {
      score++;
      correctAnswers.push(choice)
      document.querySelector("#result").textContent = "Correct!";
    } else {
      document.querySelector("#result").textContent = "Wrong!";
    }
    currentQuestion++;
    if (currentQuestion === questions.length) {
      document.querySelector("#result").textContent = `Quiz complete! You scored ${score} out of ${questions.length}`;
      document.querySelector("#submit").style.display = "none";
      returnCorrectAnswers();
    } else {
      displayQuestion();
    }
  }
  function displayAnswers() {
    let answers = "";
    for (let i = 0; i < questions.length; i++) {
      answers += `Question ${i+1}: ${questions[i].answer} <br>`;
    }
    document.getElementById("answers").innerHTML = answers;
  }
  
  function returnCorrectAnswers() {
    console.log("Correct answers:", correctAnswers);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    displayQuestion();
    document.querySelector("#submit").addEventListener("click", checkAnswer);
  });
  document.getElementById("submit").addEventListener("click", function(){
    quizAnswered = true;
  });
  
  // Add an event listener to the window to listen for a load event
  window.addEventListener("load", function(){
    if (quizAnswered) {
      displayAnswers();
      document.getElementById("answers").style.display = "block";
    } else {
      document.getElementById("answers").style.display = "none";
    }
  });
  setTimeout(displayAnswers, 30000);