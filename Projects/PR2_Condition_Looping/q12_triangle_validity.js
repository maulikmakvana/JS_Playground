// Q12. Program to check triangle validity
alert("Q12");
console.log("Q12. Program to check triangle validity");
alert("Q12: Check Triangle Validity");

let angle1 = parseInt(prompt("Q12: Enter FIRST angle:"));
let angle2 = parseInt(prompt("Q12: Enter SECOND angle:"));
let angle3 = parseInt(prompt("Q12: Enter THIRD angle:"));

let sum = angle1 + angle2 + angle3;

if (sum == 180 && angle1 > 0 && angle2 > 0 && angle3 > 0) {
    console.log("Triangle is Valid");
} else {
    console.log("Triangle is Not Valid");
}

