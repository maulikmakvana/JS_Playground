// 1.Write a JavaScript program to check number positive and negetive? (using simple function)
alert("Q1");


function number (num ) 
{
    if( num < 0 )
    {
        console.log("Number  is negetive  : ");
        
    }
    else if ( num > 0 )
        {
            console.log("Number  is positive : ");
            
        }
    else if ( num === 0 ) 
        {
            console.log("Number  is zero : ");
            
        }
    else
    {
            console.log("Enter Valid Number  : ")
        }
    }
let A = Number ( +prompt (" Q-1 enter Number  : "));

number(A);
