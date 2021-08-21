//concat
const guys = ['ike', 'nonso', 'james'];
const babes = ['amaka', 'joy'];
const concated = babes.concat(babes);
const concatedES6 = [...guys, ...babes];
// console.log(concated);
// console.log(concatedES6);


//toString, indexOf, lastIndexOf, splice, sort, pop, shift, copyWithin, fill
let fruits = ["Banana", "Orange", "Apple", "Mango", "Orange"];
const fruitsStr = fruits.toString();
// console.log(fruitsStr);
const orangeIndex = fruits.indexOf('Orange'); //1
// console.log(orangeIndex);
const orangeIndexLast = fruits.lastIndexOf('Orange'); //4
// console.log(orangeIndexLast);
// fruits = fruits.splice(2, 1, "Lemon", "Kiwi"); //[array] at position 2, add 2 elements, remove 1
// console.log(fruits);
fruits = fruits.slice(1, 3); //[array] select elements from position 1, ending at 3 (not included)
// console.log(fruits);
fruits.sort(); //[array]
// console.log(fruits);
fruits.pop(); //[array] remove last element
// console.log(fruits);
fruits.shift(); //[array] remove first element
// console.log(fruits);
fruits.reverse(); //[array] reverse position of the elements
// console.log(fruits);
fruits.copyWithin(2, 0); 
// console.log(fruits);
fruits.fill('Peach', 3); //[array] fill the array with 'Peach', starting from index 3
// console.log(fruits);


//some, every, find, findIndex, reduce, reduceRight
const numbers = [23, 43, 17, 200, 309];
const anyGood = numbers.some(num => num > 100); //[boolean] ensure at least one element > 100
// console.log(anyGood);
const allGood = numbers.every(num => num > 16); //[boolean] ensure each element > 16
// console.log(allGood);
const found = numbers.find(num => num > 97); //[int] find first occurence > 97
// console.log(found);
const foundIndex = numbers.findIndex(num => num > 97); //[int] find the index of the first occurence > 97
// console.log(foundIndex);
const reduced = numbers.reduce((total, num) => total - num); //[int] subtract each element from the last result, starting from the left. 
// console.log(reduced);
const reducedRight = numbers.reduceRight((total, num) => total - num); //[int] subtract each element from the last result, starting from right. 
// console.log(reducedRight);


//from (string to array)
const strToArraylize = 'Hello World!';
const str2Arr = Array.from(strToArraylize);
const str2ArrES6 = [...strToArraylize];
// console.log(str2Arr);
// console.log(str2ArrES6);
