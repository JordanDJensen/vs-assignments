const readline = require("readline-sync");
var val = readline.question("please enter your first number ");
var val2 = readline.question("please enter your second number ");

function add(){
    result = val + val2
    console.log("The results is: " + result);
}
var op = readline.question("what operation do you want to perform?" +  "\n(a)add \n(s)subtract \n(d)divide \n(m)multiply\n");

if(op== "a"){
    add(val, val2)
} else if(op == "s"){
    console.log("subtract");
} else if(op == "m"){
    console.log("multiply");
}else if(op == "d"){
    console.log("divide");
} else {
    return;
}

