//Double the numbers in the array
const arr = [2,5,100]
const doubleNumbers = arr.map(function(num){
    return num * 2;
});

console.log(doubleNumbers);

// Convert array of numbers into string

const arr2 = [2, 5, 100];
const stringForm = arr.map(String);

console.log(stringForm);


//Capitalize the first letter of each name and make the rest of the characters lowercase
const arrayNames = ["john", "JACOB", "jinGleHeimer", "schmidt"]
const capName = arrayNames.map(function(name){
  const lowercase = name.toLowerCase();
  const uppercase = name.charAt(0).toUpperCase();
  const rest =  lowercase.slice(1); 
    return uppercase + rest;
});

console.log(capName);


//Make an array of strings of the names
const info =[
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

const namesOnly = info.map(function(user){
    return user.name;

});

console.log(namesOnly)


//Make an array of strings of the names saying whether or not they can go to The Matrix
const movieTime = info.map(function(user){
    if(user.age > 18 ){
        return user.name + " can go to the Matrix"
    } else {
        return user.name + " is under age!!!"
    }
});

console.log(movieTime);

//Make an array of the names in h1s, and the ages in h2s

const heading = info.map(function(user){
    return "<h1>" + user.name + "</h1><h2>" + user.age + "</h2>"
});


console.log(heading);
