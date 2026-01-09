// Q4: Swap two numbers without third variable
alert("Q4");
let A = Number(prompt("Enter value of A"));
let B = Number(prompt("Enter value of B"));

A = A ^ B;
B = A ^ B;
A = A ^ B;

console.log("A =", A);
console.log("B =", B);
