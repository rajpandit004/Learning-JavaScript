"use strict"; // Enables strict mode: catches common mistakes and prevents unsafe actions

/*
- 'alert' works only in browser environment
- In Node.js, it gives ReferenceError because 'alert' is not defined
*/
alert(3 + 3);

/*
- Always avoid unnecessary line breaks in simple expressions
- It is recommended to write clean and readable code
*/
console.log(
    3 +
    3
);

let name = "raj"; // String type
let age = 22; // Number type
let is_logged_in = false; // Boolean type
let state; // Undefined type
let temperature = null; // Null type

/*
List of Primitive Datatypes :-
1. number => Stores integer or floating-point numbers
2. bigint => Stores very large integers
3. string => Text enclosed in single, double, or backticks
4. boolean => true or false
5. null => Represents intentional absence of value
6. undefined => Variable declared but not assigned
7. symbol => Represents unique identifiers

Example of Non-Primitive Datatype: object (stores data in key-value pairs)
*/

// 'typeof' is used to return the type of the variable or a value
console.log(typeof "hitesh");

console.log(typeof undefined); // It returns 'undefined'
console.log(typeof null); // It returns 'object' (this is a known JavaScript bug)
