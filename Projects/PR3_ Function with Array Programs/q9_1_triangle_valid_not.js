//  9 Triangle Valid or Not 
// Simple Function (No Return, With Parameter)


alert("Q9.1");
function checkTriangle(a, b, c)
{
    if (a + b + c == 180)
        console.log("Triangle is Valid");
    else
        console.log("Triangle is Not Valid");
}

let Q9_1 = Number(prompt("Q-9.1 Enter first angle:"));
let Q9_2 = Number(prompt("Q-9.1 Enter second angle:"));
let Q9_3 = Number(prompt("Q-9.1 Enter third angle:"));

checkTriangle(Q9_1, Q9_2, Q9_3);

