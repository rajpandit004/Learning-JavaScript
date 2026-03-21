let score = "33";

// There are 2 syntax for 'typeof'
console.log(typeof score); // It returns 'string'
console.log(typeof(score));

let value_in_number = Number(score); // It convert string to number
console.log(typeof value_in_number); // It returns 'number'

console.log(value_in_number)

score = "33abc";
value_in_number = Number(score);

console.log(typeof value_in_number);
console.log(value_in_number);
