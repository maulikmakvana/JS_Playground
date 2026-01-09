// 6.Write a javascript Program to perform a swapping of two variables.(all function use)
alert("Q6");
function swap(a, b)
{
    let temp = a;
    a = b;
    b = temp;

    console.log("After Swapping:");
    console.log("a = " + a);
    console.log("b = " + b);
}

let x = Number(prompt("Q-6 Enter first number:"));
let y = Number(prompt("Q-6 Enter second number:"));

swap(x, y);
