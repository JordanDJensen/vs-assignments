const { Console } = require("console");
const readline = require("readline-sync");
let user = readline.question("Hello user what is your name?"); 

console.log("\nWelcome " + user + " to the Escape Room! To get you started I will share a background story to help you" +
" understand where you are at.  It was a dark and stormy night when " + user + " arrived at the mysterious " +
"mansion on the outskirts of town. You had heard rumors of an escape room within the mansion that promised " + 
"to be the most challenging one yet, and you were eager to try it out. As you entered the room, the door slammed shut\n\n" 
+ "You must find a way out of the escape room.\n" + "You have 3 tries to escape the room or you lose.");

let escapeCount = 3; 
let foundKey = false;


while( escapeCount > 0){
    const choice = ["1 - Find the key.", "2 - Open door", "3 - Put had through hole"]
    let choiceIndex = readline.keyInSelect(choice, "What do you want to?");

   switch(choice[choiceIndex]){
    case "1 - Find the key.":
        escapeCount -= 1;
        console.log("\nYou have found the key.");
       foundKey = true; 
        break;
    case "2 - Open door":
        
        if(foundKey === true){
            escapeCount = 0;
            console.log("\nYou have open the door with the key and have escaped the Room!");
             
        } else {
            escapeCount -= 1
            console.log("Door is locked");
        }
        break;
    case "3 - Put had through hole":
        console.log("Nothing there.");
        escapeCount -=1;
        break;
   }

   if(escapeCount == 0 && foundKey == false ){
    console.log(" You lose!");
   }
}