//7.3 function Without Parameter
alert("Q7.3");
function greatest()
{
    let a = 10;
    let b = 20;
    let c = 15;

    if (a > b) {
        if (a > c)
            console.log("A is greatest");
        else
            console.log("C is greatest");
    } else {
        if (b > c)
            console.log("B is greatest");
        else
            console.log("C is greatest");
    }
}

greatest();
