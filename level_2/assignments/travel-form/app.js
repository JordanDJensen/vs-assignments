const form = document["travel-form"];

form.addEventListener("submit",(event) =>{
    event.preventDefault();
    let firstName = form.fName.value
    let lastName = form.lName.value
    form.fName.value = "";
    form.lName.value = "";

    let age = form.age.value;
    form.age.value = "";

    let gender = form.gender.value;
    form.gender.value = "";


    let location = form.travel.value;
    form.travel.value = ""


    let diet = [];

    for(let i = 0; i < form.dietary.length; i++){
        if(form.dietary[i].checked){
            diet.push(form.dietary[i].value);
        }

    }



    alert("First name: " + firstName + "\nLast name: " + lastName +"\nAge: " + age + "\nGender: " + gender +"\nLocation: " + location + "\nDietary restriction: " + diet);
});