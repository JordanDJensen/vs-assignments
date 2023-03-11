var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"


function forception(people, alphabet){
    const newArray = alphabet.split("");
    const result = [];
    for(let i =0; i < people.length; i++){
        people[i] =  people[i].concat(":");
        result.push(people[i])
        for(let j = 0; j < newArray.length; j++){
            result.push(newArray[j])
        }
    }

 return result;

}

console.log(forception(people, alphabet.toUpperCase()));