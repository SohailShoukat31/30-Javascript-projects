// Project 05;

// Swapping of two Numbers
// Using a Temp Variable
// 01
let a = parseInt(prompt("Enter value of a :"));
let b = parseInt(prompt("Enter the value of b :"));
console.log(`The value of a is : ${a} \n The value of b is : ${b}`);

let temp;
// a = 5  b = 6;
temp = a; // temp 5
a = b; //  a = 6
b = temp;
console.log(
  ` After Swapping \n The value of a is : ${a} \n The value of b is : ${b}`
);

// 02;
// Withou using a temp variable

let c = parseInt(prompt("Enter value of c :"));
let d = parseInt(prompt("Enter the value of d :"));
console.log(`The value of c is : ${c} \n The value of d is : ${d}`);
c = c + d;
d = c - d;
c = c - d;
console.log(
  ` After Swapping \n The value of c is : ${c} \n The value of d is : ${d}`
);
