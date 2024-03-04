// Chapter 9-11
// Q1
// var question = prompt("City name");
// if (question === "Karachi") {
//   alert("Welcome to City of Lights");
// }
// Q2
// var question = prompt("Gender");
// if (question === "male") {
//   alert("Good Morning Sir!");
// }
// if (question === "female") {
//   alert("Good Morning Madam!");
// }
// Q3

// var RemainingFuel = prompt("Mention Remaining Fuel in liters");
// if (RemainingFuel < 0.25) {
//   alert("Please Refill the Fuel in your car");
// }
// Q3
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }
// answer is yes
// Q4
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }
// answer is no
// Q5
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// answer is wrong
// Q6
// answer is no
// Q7
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }
// answer is right
// var num = prompt("Guess the secret number");
// if (num == 10) {
//   alert("Bingo!");
// }
// if (num < 10) {
//   alert("Close enough to the number");
// }
// var num = prompt("Enter a Number");
// if (num % 3 == 0) {
//   alert("True");
// } else {
//   alert("False");
// }
// var num = prompt("Enter a Number");
// if (num % 2 == 0) {
//   alert("True");
// } else {
//   alert("False");
// }
// var Temp = prompt("Temperature");
// if (Temp > 40) {
//   alert("It's too hot outside");
// }
// if (Temp > 30) {
//   alert("The weather today is normal");
// }
// if (Temp > 20) {
//   alert("Todays's weather is cool");
// }
// if (Temp > 10) {
//   alert("OMG today's weather is so cool");
// }
// var first = prompt("First number");
// var Second = prompt("second number");
// var operation = prompt("Operation");

// if (operation == "+") {
//   alert(first + Second);
// }
// if (operation == "*") {
//   alert(first * Second);
// }
// if (operation == "-") {
//   alert(first - Second);
// }
// if (operation == "/") {
//   alert(first / Second);
// }
// if (operation == "%") {
//   alert(first % Second);
// }
// Chapter 10
// Q1
// var city = prompt("Enter City");
// if (city === "karachi") {
//   console.log("City of Lights");
// }
// Q2
// if (x === y) {
//   var z = prompt("Enter the value of z:");
// }
// Q3
// var code = prompt("Enter a Zip code");
// if (code === "100100") {
//   alert("karachi");
// } else {
//   alert("Please write correct city");
// }
// Q4

// var x = 1; // Initial value of x

// if (x === 1) {
//   x = 8; // Assign a new value to x if the condition is true
// }

// console.log(x);
// Q5
// var num1 = 2;
// var num2 = 4;
// var code = prompt("Enter number");
// if (code !== code) {
//   alert("True");
// }

// if (value1 >= value2) {
//   alert("yes!");
// }
// Q6
// var variable = 5;
// if (variable !== 10) {
//   variable = 10;
// }
// alert(variable);
// Q7
// var num = 6;
// if (num !== 10) {
//   alert("congratulation!");
// }
// var FirstName = "Warisha";
// var firstName = prompt("Enter your First Name");
// if (FirstName !== Warisha) {
//   alert("No match");
// }
// Q8
// if (variable1 > = variable2){
// alert ("yes")
// }
// else{
//     alert ("No")
// }
// Q9
// if (a === 10) {
//     alert("a is 10");
//     }
//     else{
//         alert ("The correct value of a is 10")
//     }
// Q10
// var city = prompt("Please enter a city:");

// if (city === "Karachi") {
//     alert("Acknowledging it's Karachi");
// } else if (city === "Lahore") {
//     alert("Acknowledging it's Lahore");
// } else {
//     alert("The city is neither Karachi nor Lahore.");
// // }
// if (a == b && c == d){

// // }
// if (a == b && c != d) {
// }
// if ((name === "Hamza" || name === "Arsalan") && age < 60) {
//     // Rest of the code goes here
// }

// var num1 = 3
// var num2 = 5
// if ( num1 < num2 || num2 >= num2){

// }
// var firstName = "warisha";
// var LastName = "Asif";
// var one = prompt("Enter your First name");
// var two = prompt("Enter your Last name");
// if (firstName) {
//   alert("login Successfully");
// }
// var password = prompt("Please enter your password:");

// if (password !== "") {
//   if (password.length <= 5) {
//     alert("Password must be greater than 5");
//   } else {
//     alert("OK");
//   }
// // }
// if (a==1){
//     if(c== "Max"){
//         alert ("Ok")
//     }
// }
// if (a === 1 && c === "Max") {
// // }
// var num1 = 7;
// var num2 = 7;
// if (num1 === num2) {
//   if (num1 <= num2) {
//     alert("Ok");
//   }
// }
// Chapter 12-13
// Q1
// var first = prompt("Enter first integer");
// var second = prompt("Enter second integer");
// function compareIntegers(num1, num2) {
//   if (num1 > num2) {
//     console.log(`${num1} is larger than ${num2}`);
//   } else if (num1 < num2) {
//     console.log(`${num2} is larger than ${num1}`);
//   } else {
//     console.log("Both integers are equal.");
//   }
// }
// Q2
// var input = prompt("Enter number");
// if (input > 0) {
//   alert("Positive");
// }
// if (input < 0) {
//   alert("negetive");
// } else {
//   alert("Zero");
// }
// var vowels = ["a", "e", "i", "o", "u"];
// var input = prompt("Enter single letter");
// if (vowels) {
//   alert("True");
// }
// // Q3
// var password = "home123";
// var question = prompt("Enter your password");
// if (question === null || question === "") {
//   alert("Enter your password");
// }
// if (question === password) {
//   alert("password is correct");
// }
// Q4
// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// Q5
var time = prompt("Enter the time");
if (time < 1200) {
  console.log("Good Morning");
} else if (time >= 1200 && time <= 1700) {
  console.log("Good Afternoon");
} else if (time > 1700 && time <= 2100) {
  console.log("Good Evening");
} else {
  console.log("Good Night");
}
