const a = document["add-form"];
const s = document["sub-form"];
const m = document["multi-form"];

a.addEventListener("submit", function (event){
    event.preventDefault();
    const x = parseInt(a.add1.value);
    const y = parseInt(a.add2.value);
    const result = x + y;
    a.add1.value = "";
    a.add2.value = "";

    const p = document.createElement("p");
    p.textContent = "The result is: " + result
    document.getElementsByClassName("add")[0].append(p);
    
})

s.addEventListener("submit", function (event){
    event.preventDefault();
    const x = parseInt(s.sub1.value);
    const y = parseInt(s.sub2.value);
    const result = x - y;
    s.sub1.value = "";
    s.sub2.value = "";

    const p = document.createElement("p");
    p.textContent = "The result is: " + result
    document.getElementsByClassName("sub")[0].append(p);
    

})

m.addEventListener("submit", function (event){
    event.preventDefault();
    const x = parseInt(m.multi1.value);
    const y = parseInt(m.multi2.value);
    const result = x * y;
    m.multi1.value = "";
    m.multi2.value = "";
    const parent = document.getElementsByTagName("p");
    parent.remove();
    const p = document.createElement("p");
    p.textContent = "The result is: " + result
    document.getElementsByClassName("multi")[0].append(p);
   
})