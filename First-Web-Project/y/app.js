let userScore = 0;
let compterScore = 0;
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score");
const Scoreboard_div = document.querySelector(".score-board")
const Result_p = document.querySelector(".result > p");
const Rock_div = document.getElementById("r");
const Paper_div = document.getElementById("p");
const Scissors_div = document.getElementById("s");

function getComputerchoice(){
   list = ["r", "p", "s"];
   choice = Math.floor(Math.random() * 3);
   return list[choice];
}

function convertToword(letter){
   if(letter === "r") return "Rock";
   if(letter === "s") return "Scissors";
   return "Paper";
}

function win(User, Computer){
   userScore++;
   userScore_span.innerHTML = userScore;
   Result_p.innerHTML = convertToword(User) + " beats " + convertToword(Computer) + " you win!!! ";
}

function lose(User, Computer){
   compterScore++;
   computerScore_span.innerHTML = compterScore;
   Result_p.innerHTML = convertToword(Computer) + " beats " + convertToword(User) + " you lose!!!"
}

function draw(){
   Result_p.innerHTML = "It is a draw!!! No one wins."
}
function game(choice){
   const user_choice = choice;
   const computer_choice = getComputerchoice();
   switch (user_choice + computer_choice){
      case "rs":
      case "pr":
      case "sp":
         win(user_choice, computer_choice);
         break;
      case "rp":
      case "ps":
      case "sr":
         lose(user_choice, computer_choice);
         break;
      case "rr":
      case "ss":
      case "pp":
         draw();
         break;
   }
}

Rock_div.addEventListener('click', function(){
   game("r");  
})
Paper_div.addEventListener('click', function(){
   game("p");
})
Scissors_div.addEventListener('click', function(){
   game("s");
})