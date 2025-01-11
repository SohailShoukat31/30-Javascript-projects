// Project 04

// Right Angle
let base = parseInt(prompt("Please enter the base value "));
let height = parseInt(prompt("Please enter the height value"));
let area = (base * height) / 2;
alert(`The area of right angle is :  ${area}`);

//________________________________________________________________________//

// Regular Triangle

let a = 10;
let b = 5;
let c = 10;
let s = (a + b + c) / 2;
console.log(s);
let temp = s * (s - a) * (s - b) * (s - c);
let regularArea = Math.sqrt(temp);
console.log(regularArea);
