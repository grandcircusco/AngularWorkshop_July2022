// This is also found at https://replit.com/@dwolverton/SaddlebrownIckyAudacity#index.ts

// number
let year: number = 2022;
console.log( year + 10 );
// string
let food: string = "taco";
let firstName = "John";
  // INVALID: firstName = 123; (string type was inferred)
let lastName = "Doe";
let fullName = firstName + " " + lastName;
let fullName2 = `${firstName} ${lastName}`;
console.log(fullName);
console.log(fullName2);
// boolean
let happy: boolean = true;
// null - intentional absence of a value
// NOTE: types are not nullable by default
// string | null means it can be null or it can be a string
let pet: string | null = null;
// undefined - missing or not fill in yet
let total: number;

// array
let scores: number[] = [ 2, 7, 9, 21, 3 ];
scores.push(10);

let sum = 0;
for (const score of scores) {
  sum += score;
}
console.log(sum / scores.length);

sum = 0;
scores.forEach(score => {
  sum += score;
});
console.log(sum / scores.length);

// function
function add(a: number, b: number): number {
  return a + b;
}
console.log( add(2, 3) );


const subtract = (a: number, b: number): number => {
  return a - b;
}
console.log( subtract(12, 3) );
  
// object
let doggy = {
  name: "Burt"
};
// doggy.age = 10; - Can't add ad hoc properties in TS