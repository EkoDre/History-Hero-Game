// 1) Quiz data
const civilWarQuiz = [
  {
    question: "What year did the American Civil War begin?",
    answer: "1861",
    options: ["1776", "1812", "1861", "1865"],
  },
  {
    question: "Who was the President of the United States during the Civil War?",
    answer: "Abraham Lincoln",
    options: [
      "Andrew Jackson",
      "Abraham Lincoln",
      "Ulysses S. Grant",
      "James Buchanan",
    ],
  },
  {
    question: "Which battle is considered the turning point of the Civil War?",
    answer: "The Battle of Gettysburg",
    options: [
      "The Battle of Antietam",
      "The Battle of Gettysburg",
      "The Battle of Fort Sumter",
      "The Battle of Bull Run",
    ],
  },
  {
    question: "What was the name of the Confederacy’s President?",
    answer: "Jefferson Davis",
    options: [
      "Robert E. Lee",
      "Jefferson Davis",
      "Stonewall Jackson",
      "James Madison",
    ],
  },
  {
    question: "What was the main cause of the Civil War?",
    answer: "Slavery",
    options: ["Taxation", "Slavery", "States' Rights", "Territorial Expansion"],
  },
  {
    question: "Which general led the Confederate Army?",
    answer: "Robert E. Lee",
    options: [
      "Ulysses S. Grant",
      "Robert E. Lee",
      "William Tecumseh Sherman",
      "Stonewall Jackson",
    ],
  },
  {
    question:
      "Which document issued by Lincoln freed enslaved people in Confederate states?",
    answer: "The Emancipation Proclamation",
    options: [
      "The Bill of Rights",
      "The Gettysburg Address",
      "The Emancipation Proclamation",
      "The Thirteenth Amendment",
    ],
  },
  {
    question:
      "Where did General Robert E. Lee surrender, effectively ending the Civil War?",
    answer: "Appomattox Court House",
    options: ["Gettysburg", "Richmond", "Appomattox Court House", "Atlanta"],
  },
  {
    question: "Which amendment abolished slavery in the United States?",
    answer: "The 13th Amendment",
    options: [
      "The 10th Amendment",
      "The 13th Amendment",
      "The 15th Amendment",
      "The 19th Amendment",
    ],
  },
  {
    question: "What was the first battle of the Civil War?",
    answer: "The Battle of Fort Sumter",
    options: [
      "The Battle of Bull Run",
      "The Battle of Fort Sumter",
      "The Battle of Shiloh",
      "The Battle of Vicksburg",
    ],
  },
];

// 2) Variables to track state
let currentQuestionIndex = 0; 
let currentQuestion = null; 

const buttons = document.querySelectorAll(".answer-btn");
const display = document.querySelector(".display");
let nextRoundCheck = false;

// 3) Example click listeners on your buttons (the shuffleArray inside is not fully used yet)
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event.target.textContent);

    
  });
});

// 4) Shuffle function to randomize the entire quiz
function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

// 5) DOMContentLoaded: Shuffle quiz & display first question
document.addEventListener("DOMContentLoaded", function () {
  shuffle(civilWarQuiz);

  const buttons = document.querySelectorAll(".answer-btn");
  const questionBox = document.querySelector("#question");
  const questionDefintion = civilWarQuiz[0];

  currentQuestion = questionDefintion; // Track the question
  questionBox.textContent = questionDefintion.question;

  buttons[0].textContent = questionDefintion.options[0];
  buttons[1].textContent = questionDefintion.options[1];
  buttons[2].textContent = questionDefintion.options[2];
  buttons[3].textContent = questionDefintion.options[3];
});

// 6) Next button logic
const nextButton = document.querySelector("#next-btn");


// ADDED: Disable Next at the start so you can't skip
nextButton.disabled = true;

nextButton.addEventListener("click", function () {
  // ---- 1) Remove the "if (!nextRoundCheck) return;" check so Next always works
  // if (!nextRoundCheck) return; // <== REMOVED
  nextRoundCheck = false; 

  display.textContent = "";

  // If no more questions left, you win
  if (civilWarQuiz.length === 0) {
    document.getElementById("victory-message").style.display = "block";
    console.log("You Win!");
    return; 
  }

  const questionBox = document.querySelector("#question");
  const buttons = document.querySelectorAll(".answer-btn");

  // Pick a random question
  const randomIndex = Math.floor(Math.random() * civilWarQuiz.length);
  currentQuestion = civilWarQuiz[randomIndex]; 

  // ---- 2) Replace randomQuestion with currentQuestion
  console.log(currentQuestion);       // Log the newly picked question
  console.log("you clicked next");

  questionBox.textContent = currentQuestion.question;

  // Assign answer options
  currentQuestion.options.forEach((option, index) => {
    buttons[index].textContent = option;
    buttons[index].disabled = false; // re-enable buttons for new question
  });

 // Remove used question from the array
civilWarQuiz.splice(randomIndex, 1);
  

 // ADDED: Disable Next again for the new question
 nextButton.disabled = true;

});

// 7) Health bar logic
let lives = 3; 
const healthBar = document.getElementById("health");

function loseLife() {
  if (lives > 0) {
    lives--;
    updateHealthBar();
    console.log("Lives left:", lives);
  }
  if (lives === 0) {
    document.getElementById("game-over").classList.remove("hidden");
    
    console.log("Game-over");
    document.getElementById("game-over").style.display = "block"; // Show Game Over
    nextButton.disabled = true; // Disable Next button
    buttons.forEach((btn) => btn.disabled = true); // Disable all answer buttons
  }
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#game-over button").addEventListener("click", function () {
      lives = 3; // Reset Lives
      currentQuestionIndex = 0; // Restart from first question
      shuffle(civilWarQuiz); // Shuffle questions again
      updateHealthBar();
      document.getElementById("game-over").style.display = "none"; // Hide Game Over screen
      buttons.forEach((btn) => btn.disabled = false); // Enable answer buttons
      nextButton.disabled = true; // Disable Next button until an answer is chosen
      askQuestion(); // Start new round
    });
  });
  



function updateHealthBar() {
  const percentage = (lives / 3) * 100;
  healthBar.style.width = percentage + "%";
  console.log("Updated Health:", percentage + "%");
}

// 8) When user clicks an answer
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    nextRoundCheck = true; 

       // ADDED: Enable Next now that a choice was made
       nextButton.disabled = false;



    const selectedAnswer = button.textContent;
    if (!currentQuestion) return;  // Make sure we have a question

    // Disable all buttons after an attempt
    buttons.forEach(function (btn) {
      btn.disabled = true;
    });

    // Check the answer
    if (selectedAnswer === currentQuestion.answer) {
      console.log("correct");
      display.textContent = "Correct";
      display.classList.add("correct");
setTimeout(() => display.classList.remove("correct"), 1000); // Reset after 1 second
    } else {
      console.log("You're hurt");
      display.textContent = "You're Hurt Soldier!";
      display.classList.add("hurt");
setTimeout(() => display.classList.remove("hurt"), 1000); // Reset after 1 second
      loseLife(); // lose a life on wrong
    }
  });
});

