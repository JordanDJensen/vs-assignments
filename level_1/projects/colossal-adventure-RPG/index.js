const readline = require('readline-sync');

console.log("Welcome to your next mission! If you accept, you are task to find out the whereabouts of agent 007." + 
"We have reasons to believe he has been capture by the evil drug lord, Ricardo Alvarez. Agent 007 last whereabouts were seen in "
+ "the Bahamas at the Marabella hotel in the search for Ricardo. We tried to make contact and had no success. This message" + 
" will distruct in 10 seconds.\n");

const user = readline.question("Please enter your first name: ");

console.log(user)