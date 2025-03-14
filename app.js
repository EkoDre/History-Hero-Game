const civilWarQuiz = [
  {
    question: "What year did the American Civil War begin?",
    answer: "1861",
    options: ["1776", "1812", "1861", "1865"],
  },
  {
    question:
      "Who was the President of the United States during the Civil War?",
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

const buttons = document.querySelectorAll(".answer-btn");
const display = document.querySelector(".display")

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event.target.textContent);
    // This section is next

   
    const shuffleArray = function (options) {
      for (let i = options.length - 1; i > 0; i--) {
        // Your shuffle logic here (e.g., swapping elements)
      }
      return options;
    };
  });
});

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

document.addEventListener("DOMContentLoaded", function () {
  shuffle(civilWarQuiz);

  const buttons = document.querySelectorAll(".answer-btn");

  const questionBox = document.querySelector("#question");

  const questionDefintion = civilWarQuiz[0];

  questionBox.textContent = questionDefintion.question;

  buttons[0].textContent = questionDefintion.options[0];
  buttons[1].textContent = questionDefintion.options[1];
  buttons[2].textContent = questionDefintion.options[2];
  buttons[3].textContent = questionDefintion.options[3];
});

const nextButton = document.querySelector("#next-btn");

nextButton.addEventListener("click", function () {
  display.textContent = ""

  if (civilWarQuiz.length === 0) {
    alert("Congrats! You are a Hero!");
    console.log("You Win!");
    return; // Stop if no more questions are left
  }

  const questionBox = document.querySelector("#question");
  const buttons = document.querySelectorAll(".answer-btn");

  // Get a random question index
  const randomIndex = Math.floor(Math.random() * civilWarQuiz.length);
  const randomQuestion = civilWarQuiz[randomIndex]; // Select question

  console.log(randomQuestion);
  console.log("you clicked next");

  // Display question
  questionBox.textContent = randomQuestion.question;

  // Assign answer options using a loop
  randomQuestion.options.forEach((option, index) => {
    buttons[index].textContent = option;
  });

  // Remove used question from the array
  civilWarQuiz.splice(randomIndex, 1);
});

// Also grab the options from the randomIndex and put them into the buttons
// randcomQuestion.options
// HINT: loop the buttons, and for each button grab one option and
// change the buttons .textContent to be the option

// let total score == 100
// if player get the answer score remains 100
// if player gets answers incorrect minus 25 from score
// total 10 question

// function checks answers playerschoice.answer
//dont take a life if the answer matches
// if choose incorrect take a life
//3 lives

// HEEEALTH BAR !!!!!!!

let lives = 3; // Player starts with 3 lives
const healthBar = document.getElementById("health"); // Select health bar

// Function to decrease lives and update the health bar
function loseLife() {
  if (lives > 0) {
    lives--; // Reduce a life
    updateHealthBar();
    console.log("Lives left:", lives); // Debugging
  }

  if (lives === 0) {
    alert("Game Over! You lost all your lives."); // ❌ Game Over message
    location.reload(); // Restart the game
  }
}

// Function to update health bar width
function updateHealthBar() {
  const percentage = (lives / 3) * 100; // Convert lives to percentage
  healthBar.style.width = percentage + "%"; // Shrink health bar
  console.log("Updated Health:", percentage + "%"); // Debugging
}

// ✅ Modify your existing button click event to call `loseLife()` when wrong

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedAnswer = button.textContent;
    const currentQuestion = civilWarQuiz[0];
  

    if (selectedAnswer === currentQuestion.answer) {
      // alert("Correct Soldier!");
      console.log("correct")
      display.textContent = "Correct"
    } else {
      // alert("You're Hurt Soldier!");
      console.log("You're hurt")
      display.textContent = "You're Hurt Soldier!"
      loseLife(); //  Lose a life on wrong answer


    }
  });
});

