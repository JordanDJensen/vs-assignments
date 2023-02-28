const form = document["addItem"]

form.addEventListener("submit", function(event){
    event.preventDefault();
    let newItem = form.title.value
    form.title.value = ""

    let li = document.createElement('li');
   

    let div = document.createElement("div");
    let btnEdit = document.createElement("button");
    let btnRemove = document.createElement("button");

    li.setAttribute("name", "shopping")
    btnRemove.classList.add("removeItem");
    div.textContent = newItem;
    
    btnEdit.textContent = "edit";
    btnRemove.textContent = "X";

    li.appendChild(div);
    li.appendChild(btnRemove);
    li.appendChild(btnEdit);

   
    

    let listItem = document.getElementById("list");
    listItem.appendChild(li);

    btnRemove.addEventListener("click", () =>{
        var removeItem = document.getElementsByClassName("removeItem");
        for(let i =0; i < removeItem.length; i++){
           li.style.display = "none";
        }
    });

    
});


