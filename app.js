console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

let secretNumber = 5;
let min = 1;
let max = 100;
let guessNumber = prompt(
  `What is the secret number between ${min} and ${max}?`
);
guessNumber = parseInt(guessNumber);

if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
  console.log(`That isn't a valid number between ${min} and ${max}! >:(`);
} else if (guessNumber == secretNumber) {
  console.log("Congrats! You guessed the secret number! :D");
} else if (guessNumber > secretNumber) {
  console.log("Your guess was too high! Try again! :(");
} else if (guessNumber < secretNumber) {
  console.log("Your guess was too low! Try again! :(");
}

let birthMonth = prompt("Please insert your birth month:");
switch (birthMonth.toLowerCase()) {
  case "december":
  case "january":
  case "february":
    console.log("You have a Winter Birthday!");
    break;
  case "march":
  case "april":
  case "may":
    console.log("You have a Spring Birthday!");
    break;
  case "june":
  case "july":
  case "august":
    console.log("You have a Summer Birthday!");
    break;
  case "september":
  case "october":
  case "november":
    console.log("You have a Fall Birthday!");
    break;
  default:
    console.log("I don't recognize that month...");
}

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    console.log("Tank Top");
    break;
  case "02":
    console.log("T-Shirt");
    break;
  case "03":
    console.log("Long Sleeve");
    break;
  case "04":
    console.log("Sweat Shirt");
  default:
    console.log("Other");
}

switch (colorId) {
  case "BLA":
    console.log("Black");
    break;
  case "BL":
    console.log("Blue");
    break;
  case "RD":
    console.log("Red");
    break;
  case "PU":
    console.log("Purple");
    break;
  default:
    console.log("White");
}

switch (sizeId) {
  case "S":
    console.log("Small");
    break;
  case "M":
    console.log("Medium");
    break;
  case "L":
    console.log("Large");
    break;
  case "XL":
    console.log("Extra Large");
  default:
    console.log("One Size Fits All");
}

console.log(`Product: ${size} ${color} ${type}`);

let answer = 12;
let x = 4;
let y = 3;

switch (answer) {
  case typeof answer == "number":
    console.log("Correct input type...");
    break;
  case "x * y":
    console.log("Switch: Correct!");
    break;
  default:
    console.log("Switch: Incorrect!");
}
