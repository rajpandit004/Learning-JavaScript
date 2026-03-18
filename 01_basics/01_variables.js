const account_id = 1024; // Constant variable
let account_email = "abcd@email.com";
account_city = "Siliguri"; // Allowed but not recommended

/*
- Prefer not to use var
- Having issue in block scope and functional scope
*/
var account_password = "12#34&56A";

/*
- Variable without any value
- Value considered as 'undefined' here
*/
let account_state;

/*
- Can't change Constants
- Gives TypeError
*/
// account_id = 1169

account_email = "wxyz@email.com";
account_password = "98#76&54B";
account_city = "Kolkata";

console.log(account_id);

// Display data in tabular format
console.table([account_id, account_email, account_password, account_city, account_state]);

/*
NOTE:-
- Semicolon(;) is optional in JS
- Modern JS use 'let' and 'const' for declaring variables
*/
