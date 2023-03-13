// function capAndLow(str){

 
//  return str.toUpperCase() + str;
// }

// console.log(capAndLow("hello"));

function findMiddleIndex(str){
    
    return Math.floor(str.length / 2);
}

// function returnFirstHalf(str){
//     var halfWord = findMiddleIndex(str);
//     var output = str.slice(0, halfWord);
//     return output;
// }

// console.log(returnFirstHalf("Hello World"));


function capAndLow(str){
    var halfWord = findMiddleIndex(str);
    var firstHalf = str.slice(0, halfWord);

    var secondHalf = str.slice(halfWord, str.length);
    
    var output = firstHalf.toUpperCase() + secondHalf.toLowerCase();

    return output;
}

console.log(capAndLow("Hello World"));
