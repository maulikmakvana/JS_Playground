// 3.Write a JavaScript program to find which number is greter in 4 numbers using nested if else. (using simple function)
alert("Q3");
function Greatest(a, b, c, d)
{
    if (a > b) {
        if (a > c) {
            if (a > d) {
                console.log("A is greatest");
            } else {
                console.log("D is greatest");
            }
        } else {
            if (c > d) {
                console.log("C is greatest");
            } else {
                console.log("D is greatest");
            }
        }
    } 
    else {
        if (b > c) {
            if (b > d) {
                console.log("B is greatest");
            } else {
                console.log("D is greatest");
            }
        } else {
            if (c > d) {
                console.log("C is greatest");
            } else {
                console.log("D is greatest");
            }
        }
    }
}

let n1 = Number(prompt("Q-3 Enter first number:"));
let n2 = Number(prompt("Q-3  Enter second number:"));
let n3 = Number(prompt("Q-3  Enter third number:"));
let n4 = Number(prompt("Q-3  Enter fourth number:"));

Greatest(n1, n2, n3, n4);
