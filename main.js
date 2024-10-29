//  Magic Eight Ball

// create a variable to hold the user name.
const userName = "Ray";

// if statement to display user name.

if (userName === " ") {
    console.log("Hello!")
} else {
    console.log(`Hello, ${userName}!`);
}

// create variable for user question.
let userQuestion = "Will I get a new job? ";

// Display question.
console.log(userQuestion);

//Create random number.
const randomNumber = Math.floor(Math.random() * 7)


// create Magic Eight Ball variable.

let eightBall = " ";

// if statement for eight ball answers.

if (randomNumber === 0) {
    eightBall = "It is certain";
} else if (randomNumber === 1) {
    eightBall = "It is decidedly so";
}else if (randomNumber === 2) {
    eightBall = "Reply hazy try again";
}else if (randomNumber === 3) {
    eightBall = "Can not predict now";
}else if (randomNumber === 4) {
    eightBall = "Do not count on it";
}else if (randomNumber === 5) {
    eightBall = "My souces say no";
}else if (randomNumber === 6) {
    eightBall = "Outlook not so good";
}else if (randomNumber === 7) {
    eightBall = "Signs point to yes";
} else {
    eightBall = "Sorry, try again."
}

// Display eight ball answer.
console.log(eightBall);
