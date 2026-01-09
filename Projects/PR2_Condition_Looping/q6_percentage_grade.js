// 6. Percentage and Grade
alert("Q6");
console.log("6.Percentage and Grade") ;
let physics = 80;
let chemistry = 75;
let biology = 70;
let maths = 85;
let computer = 90;

let total = physics + chemistry + biology + maths + computer;
let percentage = total / 5;

console.log(" Percentage =", percentage);

if (percentage >= 90) {
    console.log("Grade A");
} else if (percentage >= 80) {
    console.log("Grade B");
} else if (percentage >= 70) {
    console.log("Grade C");
} else if (percentage >= 60) {
    console.log("Grade D");
} else if (percentage >= 50) {
    console.log("Grade E");
} else if (percentage >= 40) {
    console.log("Grade F");
} else {
    console.log("Fail");
}