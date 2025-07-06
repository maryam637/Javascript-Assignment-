// Question:1 Variable and Math Expression

let x = 10;
let y = 5;
let sum = x + y;
console.log(sum);
let difference = x - y;
console.log(difference);
let product = x * y;
console.log(product);
let quotient = x / y;
console.log(quotient);

// Question:2 if... else statemnt and comparasion operators

let age = prompt("Enter your age");
if(age>=18){
    console.log("you are an adult");
}
else{
    console.log("you are a minor");
}

// Question:3 Arrays and for loops

let fruits = ["Apple","Banana","Cherry"];
for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i]) ;
}

// Question:4 Concatenating text strings and alerts
 let firstName = "Maryam";
 let lastName = "Farooq";
 let fullName = firstName + "" + lastName;
 alert("Hello, " + fullName);

//  Question:5 Nested if statements and boolean logic

let isAdmin = true;
let isLoggedIn = false;
 
if(isAdmin){
    if(isLoggedIn){
        console.log("Welcome, admin!"); 
    }
}


