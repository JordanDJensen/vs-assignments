const form = document["addItem"]

form.addEventListener("submit", function(event){
    event.preventDefault();
    let newItem = form.title.value
    form.title.value = ""

    let li = document.createElement('li');
    let div = document.createElement("div");
    div.textContent = newItem;

    li.appendChild(div);

    let listItem = document.getElementById("list");
    listItem.appendChild(li);



});

