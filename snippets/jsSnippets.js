/* 
NOTE: in looping constructs, the order of processing speed is (not definite):
1. for
2. while
3. do...while
4. forEach
5. for...of
6. for...in
*/


//for (with initialization omitted)
let i = 1;
for (; i <= 10; i++) { //same as doing for (let i = 1; i <= 10; i++) ...
  console.log(i); 
}

const person = {
  name: "bunny",
  age: " 28",
  city: "LA",
  maritalstatus: true
};

//for-in (object)
for (const info in person) {
  console.log(`${info}: ${person[info]}`);
}

const arrs = [1, 3, 5, 7, 9];

//for-of (great for arrays, but slow)
for (const arr of arrs) {
  console.log(`${arr}`);
}

//for-in (not advised, use forEach instead)
for (const arr in arrs) {
  console.log(`${arr}: ${arrs[arr]}`);
} 


//forEach
const animals = ["dog", "cat", "mouse", "wolf", "chicken", "rabbit"];
animals.forEach((anim, index) => {
  console.log(`index: ${index}, value: ${anim}`);
});



//generator
function * powerSeries(number, power) {
  let base = number;
  while (true) {
    yield Math.pow(base, power);
    base++;
  }
} 

const powersOf2 = powerSeries(3, 2);
console.log(powersOf2); //just creates object
console.log(powersOf2.next().value);
console.log(powersOf2.next().value);
console.log(powersOf2.next().value);
console.log(powersOf2.next().value);
console.log(powersOf2.next().value);
console.log(powersOf2.next().value);
console.log(powersOf2.next().value);
console.log(powersOf2.next().value); 


//another generator example 
function * evenNumbersBetween(min, max) {
  let i = min;
  while (i < max) {
    if (i % 2 === 0) {
      yield i;
    }
    i++;
  }
}

const numbers = evenNumbersBetween(1, 100);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value); 


//while
function numbersBelowWhile(n) {
  let i = 0;
  while (i < n-1) {
    i++;
    console.log(i);
  }
}

//do...while
function numbersBelowDo(n) {
  let i = 0;
  do {
    i++;
    console.log(i);
  } while (i < n-1);
}

console.log('For While:');
numbersBelowWhile(3);
console.log('For Do:');
numbersBelowDo(3);
 

console.log("+2+4+6+8".slice(1)); //remove first character
console.log("2+4+6+8+".slice(1, -1)); //remove last character


function sumOfEvenNumbersBetweenRange(min, max) {
  let i = min, sum = 0, expr = '';
  while (i < max) {
    if (i % 2 === 0) {
      sum += i;
      expr += `+${i}`;
    }
    i++;
  }
  expr = expr.slice(1); //remove starting + sign
  return [expr, sum];
}

const [expr, sum] = sumOfEvenNumbersBetweenRange(1, 10);
console.log(`${expr} = ${sum}`);


function sumOfMultiplesBetweenRange(number, min, max) {
  let i = min, sum = 0, expr = '';
  while (i < max) {
    if (i % number === 0) {
      sum += i;
      expr += `+${i}`;
    }
    i++;
  }
  expr = expr.slice(1); //remove starting + sign
  return [expr, sum];
}

const [expr, sum] = sumOfMultiplesBetweenRange(3, 1, 20);
console.log(`${expr} = ${sum}`);



//convert string to array of its characters
let str = "Hello";
//[...str]; // H,e,l,l,o


//rest 
(function showMe(num1, num2, ...rest) {
  const arr = [num1, num2, ...rest];
  console.log(arr);
})(2, 4, 5, 7, 9, 10003030303);

