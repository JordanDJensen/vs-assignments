const divItem = document.getElementById("myBox");
const bodyItem = document.body; 
divItem.addEventListener('dblclick', (e) =>{
    divItem.style.backgroundColor = "green";
});

divItem.addEventListener('mouseover', (e) =>{
    divItem.style.backgroundColor =  "blue";
});

divItem.addEventListener('mousedown', (e) =>{
    divItem.style.backgroundColor = "red";
});
divItem.addEventListener('mouseup', (e) =>{
    divItem.style.backgroundColor = "yellow";
});

window.addEventListener('wheel', (e)=>{
    divItem.style.backgroundColor = "orange";
});

window.addEventListener("keypress", (e) =>{
    if(e.key === "g"){
        divItem.style.backgroundColor = "green";
    }

    if(e.key === "b"){
        divItem.style.backgroundColor = "blue";
    }

    if(e.key === "r"){
        divItem.style.backgroundColor = "red";
    }

    if(e.key === "y"){
        divItem.style.backgroundColor = "yellow";
    }

    if(e.key === "o"){
        divItem.style.backgroundColor = "orange";
    }
});
