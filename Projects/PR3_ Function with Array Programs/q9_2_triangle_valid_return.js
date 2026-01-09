// 9.2 Triangle Valid or Not
// Function With Return
alert("Q9.2");
function checkTriangle(a, b, c)
{
    if (a + b + c == 180)
        return "Triangle is Valid";
    else
        return "Triangle is Not Valid";
}

let q9_1 = Number(prompt("Q-9.2 Enter first angle:"));
let q9_2 = Number(prompt("Q-9.2 Enter second angle:"));
let q9_3 = Number(prompt("Q-9.2 Enter third angle:"));

console.log(checkTriangle(q9_1, q9_2, q9_3));
