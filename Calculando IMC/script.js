// Calculate BMI
const massJohn = 92;

// Massa corporal de João
const heightJohn = 1.95;
// Altura de João
const massMark = 104;
// Massa corporal de Marcos
const heightMark = 1.69;
// Altura de Marcos

let BMIJohn = massJohn / heightJohn ** 2;
let BMIMark = massMark / heightMark ** 2;

// console.log(BMIJohn, BMIMark)
let markHigherBMI = BMIMark > BMIJohn;

console.log(`Is Mark's BMI greater than John's BMI? ${markHigherBMI}`);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})! `);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})! `);
}
