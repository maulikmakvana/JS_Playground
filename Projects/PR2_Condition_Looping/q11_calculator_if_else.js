// Q11. Basic Calculator using If Else Ladder
alert("Q11");
console.log("Q11. Basic Calculator using If Else Ladder");
alert("Q11: Basic Calculator using If Else Ladder");

let x = parseInt(prompt("Q11: Enter FIRST number:"));
let y = parseInt(prompt("Q11: Enter SECOND number:"));
let op = prompt("Q11: Enter operator (+, -, *, /):");

if (op == "+") {
    console.log("Ans =", x + y);
} else if (op == "-") {
    console.log("Ans =", x - y);
} else if (op == "*") {
    console.log("Ans =", x * y);
} else if (op == "/") {
    console.log("Ans =", x / y);
} else {
    console.log("Invalid Operator");
}