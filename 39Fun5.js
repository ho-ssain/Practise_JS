// block scope vs function scope
// let and const are block scope.
// var is function scope
/**
 * What is block?
--> block is a code or group of statements that is enclosed in curly braces
--> block is a part of a function
--> block is a part of a loop
--> block is a part of a conditional statement

* What is function?
--> function is a block of code that is used to perform a specific task
--> function is a reusable block of code
--> function is a set of statements that performs a task or calculates a value
--> function is a group of statements that together perform a task 
 */

// What is Scope?
// Scope determines the accessibility (visibility) of these variables, objects,
// and functions from different parts of your code during runtime.
// scope types
// 1. global scope
// 2. function scope / local scope
// 3. block scope

// function scope
//--> function scope is a scope that is defined by a function

// block scope
//--> block scope is a scope that is defined by a block

// global scope
//--> global scope is a scope that is defined by the entire program

// local scope
//--> local scope is a scope that is defined by a function

function f1() {
  var a = 90;
}

{
  var b = 800
}

// console.log(a);
console.log(b);