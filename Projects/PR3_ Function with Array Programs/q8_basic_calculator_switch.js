// 8 Write a JavaScript program to create a basic calculator using switch case (simple function).
alert("Q8");
function calculator(a, b, choice)
{
    switch (choice)
    {
        case '+':
            console.log("Answer = " + (a + b));
            break;

        case '-':
            console.log("Answer = " + (a - b));
            break;

        case '*':
            console.log("Answer = " + (a * b));
            break;

        case '/':
            console.log("Answer = " + (a / b));
            break;

        default:
            console.log("Invalid Choice");
    }
}

let a = Number(prompt(" Q-8 Enter first number:"));
let b = Number(prompt(" Q-8 Enter second number:"));
let choice = prompt(" Q-8 Enter operator (+, -, *, /):");

calculator(a, b, choice);
