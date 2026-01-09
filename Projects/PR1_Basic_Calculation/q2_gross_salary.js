// Q2: Gross Salary
alert("Q2");
let base = Number(prompt("Enter Base Salary"));
let hraP = Number(prompt("Enter HRA %"));
let daP  = Number(prompt("Enter DA %"));
let taP  = Number(prompt("Enter TA %"));

let hra = base * hraP / 100;
let da  = base * daP / 100;
let ta  = base * taP / 100;

let gross = base + hra + da + ta;
console.log("Gross Salary =", gross);
