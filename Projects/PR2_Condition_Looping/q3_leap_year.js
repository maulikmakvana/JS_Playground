// 3. Leap Year
alert("Q3");
console.log("3.Leap Year or Odd") ;

let year = 2024;

if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    console.log(" Leap Year");
} else {
    console.log(" Not a Leap Year");
}