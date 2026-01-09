//7.1 simple function (no return, with parameter)
alert("Q7.1");
function greatest(a, b, c)
{
    if (a > b) {
        if (a > c)
             {
            console.log("A is greatest");
        } else
        
        
        {
            console.log("C is greatest");
        }
    } else {
        if (b > c) {
            console.log("B is greatest");
        } else
        
        
        {
            console.log("C is greatest");
        }
    }
}

let Q7_1 = Number(prompt("Q-7.1 Enter first number:"));
let Q7_2= Number(prompt("Q-7.2 Enter second number:"));
let Q7_3 = Number(prompt("Q-7.3 Enter third number:"));

greatest(Q7_1, Q7_2, Q7_3);
