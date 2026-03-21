// ***** Conversion into Number *****
let score = "33";
let value_in_number = Number(score);

/*
Syntax for 'typeof':
- console.log(typeof score);
- console.log(typeof(score));
*/

console.log(value_in_number);
console.log(typeof value_in_number);

/*
1. "33" => 33
2. "33abc" => NaN
3. "" => 0
4. null => 0
5. undefined => NaN
6. true => 1, false => 0
*/

/*
NOTE :-
- NaN => Not a Number, but its type is still 'number'
*/

// ***** Conversion into Boolean *****
let is_logged_in = 1;
let boolean_is_logged_in = Boolean(is_logged_in);

console.log(boolean_is_logged_in);
console.log(typeof boolean_is_logged_in);

/*
1. 1 => true, 0 => false
2. "" => false
3. "text" => true
4. null => false
5. undefined => false
*/

// ***** Conversion into String *****
let some_number = 33;
let string_some_number = String(some_number);

console.log(string_some_number);
console.log(typeof string_some_number);

/*
1. 33 => "33"
2. true => "true"
3. false => "false"
4. null => "null"
5. undefined => "undefined"
6. NaN => "NaN"
*/
