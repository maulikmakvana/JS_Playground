// 2.Write a JavaScript program to check number positive and negetive? (using no return with parameter)
alert("Q2");

function checkVote (num ) 
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
let B = Number ( +prompt (" Q-2 enter Number  : "));

checkVote(B);
