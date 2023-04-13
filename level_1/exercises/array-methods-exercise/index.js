var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1.
    vegetables.pop();
    console.log("fruit: ", fruit);
    console.log("vegetables: ", vegetables);
// 2.
    fruit.shift();
    console.log("fruit: ", fruit);
    console.log("vegetables: ", vegetables);
// 3.
     var index = fruit.indexOf("orange");
     console.log(index);
// 4. 
    fruit.push(index);
// 5. 
   let length = vegetables.length; 
   console.log(length);
// 6. 
    vegetables.push(length);
    console.log("fruit: ", fruit);
    console.log("vegetables: ", vegetables);
// 7. 
    let food = fruit.concat(vegetables);
    console.log("food: ", food);

// 8. 
    let slice = food.splice(4, 2)
    console.log("food: ", food);
// 9. 
    let reverse = 
    console.log("food: ", food.reverse());
// 10. 
    
    console.log("food: ",food.toString())

