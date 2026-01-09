// Q10. Basic Calculator using Switch Case
alert("Q10");
console.log("Q10. Basic Calculator using Switch Case");
alert("Q10: Basic Calculator using Switch Case");

let num1 = parseInt(prompt("Q10: Enter FIRST number:"));
let num2 = parseInt(prompt("Q10: Enter SECOND number:"));
let choice = prompt("Q10: Enter operator (+, -, *, /):");

switch (choice) {
    case "+":
        console.log("Ans =", num1 + num2);
        break;

    case "-":
        console.log("Ans =", num1 - num2);
        break;

    case "*":
        console.log("Ans =", num1 * num2);
        break;

    case "/":
        console.log("Ans =", num1 / num2);
        break;

    default:
        console.log("Invalid Operator");
}