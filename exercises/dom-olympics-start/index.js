let head = document.getElementById("header");
head.textContent = "JavaScript Made This!!" + "Jordan Jensen wrote the Javacript";
head.style.fontSize = "40px";
head.style.fontWeight = "bold";
head.style.textAlign = "center";


let leftText = document.querySelectorAll(".left");
let rightText = document.querySelectorAll(".right");

leftText[0].textContent = "Hello Brotha!";
rightText[0].textContent = "Hey, how is it going dude?";
leftText[1].textContent = "Nothing much man just about to go to the gym.";
rightText[1].textContent = "I am about to hit the gym too. I will see you soon!";

let clearBtn = document.getElementById("clear-button");

clearBtn.addEventListener("click", clearAll);

function clearAll(){
    let messageAll = document.getElementsByClassName("message");
    console.log(messageAll.remove());
}
// Silver


