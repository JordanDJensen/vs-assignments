const readline = require("readline-sync");
var val = readline.questionInt("please enter your first number ");
var val2 = readline.questionInt("please enter your second number ");


var op = readline.question("what operation do you want to perform?" +  "\n(a)add \n(s)subtract \n(d)divide \n(m)multiply\n");

function add(num1, num2){
    results = num1 + num2;
    return results
}
function subtract(num1, num2){
    results = num1 - num2;
    return results;
}
function divide(num1, num2){
    results = num1 / num2;
    return results; 
}
function multiply(num1, num2){
    results = num1 * num2; 
    return results;
}


if(op == "a"){
    
    console.log ("The result is : " + add(val, val2));
} else if(op == "s"){
    console.log("The results is: " + subtract(val, val2));
    
} else if(op == "m"){
    console.log("The results is: " + multiply(val, val2));

}else if(op == "d"){
    console.log("The results is: " + divide(val, val2));

} else {
    return;
}

