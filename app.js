// JavaScript program to accept two numbers and display the larger one in the console:

console.log("------------------ Task 01 ------------------")

let number1 = prompt("Enter first number:");
let number2 = prompt("Enter second number:");

if (number1 > number2) {
    console.log(number1);
} else {
    console.log(number2);
}

/*----------------------------------------------------------------------------------------------------*/

//JavaScript program to find the sign of a number:

console.log("------------------ Task 02 ------------------")

let num = prompt("Enter a number:");

if (num > 0) {
    alert("The sign is +");
} else if (num < 0) {
    alert("The sign is -");
} else {
    alert("The number is zero");
}

/*----------------------------------------------------------------------------------------------------*/

// JavaScript program to accept five numbers and display the largest one in the console:

console.log("------------------ Task 03 ------------------")

let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");
let num3 = prompt("Enter third number:");
let num4 = prompt("Enter fourth number:");
let num5 = prompt("Enter fifth number:");

let max = num1;

if (num2 > max) {
    max = num2;
}
if (num3 > max) {
    max = num3;
}
if (num4 > max) {
    max = num4;
}
if (num5 > max) {
    max = num5;
}

console.log(max);

/*----------------------------------------------------------------------------------------------------*/

// JavaScript for loop to iterate from 0 to 15 and display whether the number is odd or even:

console.log("------------------ Task 04 ------------------")

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}

/*----------------------------------------------------------------------------------------------------*/

// JavaScript program to compute the average marks and determine the grade:

console.log("------------------ Task 05 ------------------")

let marks = [80, 65, 75, 90, 95];

let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}

let avg = sum / marks.length;

let grade;

if (avg < 60) {
    grade = "F";
} else if (avg < 70) {
    grade = "D";
} else if (avg < 80) {
    grade = "C";
} else if (avg < 90) {
    grade = "B";
} else {
    grade = "A";
}

console.log("Average marks: " + avg);
console.log("Grade: " + grade);

/*----------------------------------------------------------------------------------------------------*/

//JavaScript program to print "Fizz" for multiples of three, "Buzz" for multiples of five, and "FizzBuzz" for multiples of both three and five:

console.log("------------------ Task 06 ------------------")

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    }
}

/*----------------------------------------------------------------------------------------------------*/

// JavaScript program to construct a pattern using nested for loop:

console.log("------------------ Task 07 ------------------")

for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}
