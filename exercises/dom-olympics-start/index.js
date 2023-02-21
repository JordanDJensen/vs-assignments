let head = document.getElementById("header");
head.textContent = "JavaScript Made This!!";

// let tag = document.createElement(span);
// let text = document.createTextNode("Jordan Jensen");
// tag.appendChild(text);

// var element = document.getElementById("header");
// document.body.insertBefore(tag, element);

//Bronze 
let leftText = document.querySelectorAll(".left");
let rightText = document.querySelectorAll(".right");

leftText[0].textContent = "Hello Brotha!";
rightText[0].textContent = "Hey, how is it going dude?";
leftText[1].textContent = "Nothing much man just about to go to the gym.";
rightText[1].textContent = "I am about to hit the gym too. I will see you soon!";


let clearBtn = document.getElementById("clear-button");
clearBtn.addEventListener("click", function(){
  let messages = document.querySelectorAll(".message");
    for(let i = 0; i < messages.length; i++){
      messages[i].remove();
      
    }
});


// Silver
var dropDown = document.getElementById("theme-drop-down");
dropDown.onchange = function(){

    var leftMessage =  document.getElementsByClassName("left");
    var rightMessage = document.getElementsByClassName("right");

    if(dropDown.value === "theme-two"){
      for(let i = 0; i < leftMessage.length; i++){
        leftMessage[i].style.backgroundColor = "black";
        leftMessage[i].style.color = "white";
      }

      for(let i = 0; i < rightMessage.length; i++){
        rightMessage[i].style.backgroundColor = "red";
        
      }
    } else{
        for(let i = 0; i <leftMessage.length; i++){
            leftMessage[i].style.backgroundColor = "burlywood";
            leftMessage[i].style.color = "black";
        }

        for(let i = 0; i < rightMessage.length; i++){
            rightMessage[i].style.backgroundColor = "lightblue";
           
          }
    }
}

