const account_id = 1024; // Constant variable
let account_email = "abcd@email.com";

/*
- Variable without 'let' or 'const' is allowed in non-strict mode
- It creates an implicit global variable (bad practice)
*/
account_city = "Siliguri";

/*
- It's prefer not to use 'var'
- 'var' is function-scoped (not block-scoped)
- It allows redeclaration
- It can cause unexpected behavior due to hoisting
*/
var account_password = "12#34&56A";

/*
- It's a variable without any value
- The value considered as 'undefined' here
*/
let account_state;

/*
- We can't change Constants
- It gives TypeError
*/
// account_id = 1169

account_email = "wxyz@email.com";
account_password = "98#76&54B";
account_city = "Kolkata";

console.log(account_id);

// It display data in tabular format
console.table([account_id, account_email, account_password, account_city, account_state]);

/*
NOTE :-
- Modern JS use 'let' and 'const' for declaring variables
- Semicolon (;) is optional, but recommended to avoid unexpected errors
*/
