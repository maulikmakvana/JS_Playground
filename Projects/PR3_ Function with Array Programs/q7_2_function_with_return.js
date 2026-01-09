// 7.2 Function With Return
alert("Q7.2");
function greatest(a, b, c)
{
    if (a > b) 
        
        {
        if (a > c)
            return "A is greatest";
        else
            return "C is greatest";
    } else {
        if (b > c)
            return "B is greatest";
        else
            return "C is greatest";
    }
}

let A7_2_1 = Number(prompt("Q-7.2  Enter first number:"));
let B7_2_2 = Number(prompt("Q-7.2 Enter second number:"));
let C7_2_3 = Number(prompt("Q-7.2 Enter third number:"));

let result = greatest(A7_2_1, B7_2_2, C7_2_3);
console.log(result);
