// 9. Maximum of 5 Numbers (Nested if)
alert("Q9");
console.log("9. Maximum of 5 Numbers (Nested if)") ;
let n1 = 10, 
    n2 = 20, 
    n3 = 5, 
    n4 = 30, 
    n5 = 25;

let max;

if (n1 > n2) {
    if (n1 > n3) {
        if (n1 > n4) {
            if (n1 > n5) {
                max = n1;
            } else {
                max = n5;
            }
        } else {
            max = n4;
        }
    } else {
        max = n3;
    }
} else {
    if (n2 > n3) {
        if (n2 > n4) {
            if (n2 > n5) {
                max = n2;
            } else {
                max = n5;
            }
        } else {
            max = n4;
        }
    } else {
        max = n3;
    }
}

console.log(" Maximum number is:", max);