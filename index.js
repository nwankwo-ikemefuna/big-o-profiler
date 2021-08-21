/**
 * constant time complexity
 * @param {array} arr
 * @param {number} i 
 * @return {number} - the value at the given index
 */
const constantTime = (arr, i) => {
	const searchVal = arr[i];
	// console.log(searchVal);
}

/**
 * linear time complexity (reversing an array)
 * @param {array} arr
 * @return {array} - the new array
 */
function linearTimeForwardArrayReverse(arr) {
	const len = arr.length;
  	let newArr = [];
	let comparisons = 0;
  	for (let i = len - 1; i >= 0; i--) {
    	newArr.push(arr[i]);
		comparisons++;
  	}
	console.log(`Total comparisons using linearTimeForwardArrayReverse = ${comparisons}`);
  	return newArr;
}

/**
 * linear time complexity (forward lookup)
 * @param {array} arr
 * @param {number} searchVal 
 * @return {number} - the index of the desired value 
 */
const linearTimeForward = (arr, searchVal) => {
	const len = arr.length;
	let comparisons = 0;
	let targetIndex = -1;
	for (let i = 0; i < len; i++) {
		const val = arr[i];
		if (val === searchVal) {
			targetIndex = i;
			break; //we are done here
		}
		comparisons++;
	}
	console.log(`Total comparisons using linearTimeForward = ${comparisons}`);
	return targetIndex;
}

/**
 * linear time complexity (backward lookup)
 * The function searches the list by a known value to get its index
 * @param {array} arr
 * @param {number} searchVal 
 * @return {number} - the index of the desired value 
 */
const linearTimeBackward = (arr, searchVal) => {
	const len = arr.length;
	let comparisons = 0;
	let targetIndex = -1;
	for (let i = len; i > 0; i--) {
		const val = arr[i];
		if (val === searchVal) {
			targetIndex = i;
			break; //we are done here
		}
		comparisons++;
	}
	console.log(`Total comparisons using linearTimeBackward = ${comparisons}`);
	return targetIndex;
}

/**
 * Logarithmic time complexity example
 * The function searches the list by a known value to get its index
 * This is a binary search example
 * @param {array} arr
 * @param {number} searchVal 
 * @return {number} - the index of the desired value 
 */
const logarithmicTime = (arr, searchVal) => {
	const len = arr.length;
	let start = 0;
	let end = len - 1;
	let comparisons = 0;
	let targetIndex = -1;
	while(start <= end) {
		let middle = Math.floor((start + end) / 2); //get the middle index
		if (arr[middle] === searchVal) {
			targetIndex = middle;
			break; //the middle index value is the desired value, we are done
		} else if (arr[middle] < searchVal) {
			start = middle + 1; //the middle index value is less than the desired value, we increment the middle index by 1
		} else {
			end = middle - 1; //the middle index value is greater than the desired value, we decrement the middle index by 1
		}
		comparisons++;
	}
	console.log(`Total comparisons using logarithmicTime = ${comparisons}`);
	return targetIndex; //not found
}

/**
 * Quadratic time complexity example
 * The function multiplies each value of arr1 by each value of arr2 and sums up the product
 * @param {array} arr1
 * @param {number} arr2 
 * @return {number} - the sum of the multiplication
 */
const quadraticTime = (arr1, arr2) => {
  	// if (arr1.length !== arr2.length) return undefined; 
	let comparisons = 0;
  	let sum = 0;
  	for (let i of arr1) {
    	for (let j of arr2) {
      		sum += i * j;
			comparisons++;
    	}
  	}
	console.log(`Total comparisons using quadraticTime = ${comparisons}`);
  	return sum;
}

/**
 * Linearithmic time complexity example
 * @param {number} n
 * @return {number} - the sum of the multiplication
 */
const linearithmicTime = (n) => {
	let comparisons = 0;
  	for (let i = 0; i < n; i++) {
    	for (let j = 1; j < n; j = j * 2) {
      		comparisons++;
    	}
  	}
	console.log(`Total comparisons using linearithmicTime = ${comparisons}`);
  	return null;
}

let totalExponentialIterations = 0;
/**
 * Exponential time complexity example
 * In this example, we pass in an index number to return the nth Fibonacci number in the sequence, using recursion
 * @param {number} n
 * @return {number}
 */
const exponentialTime = (n) => {
	totalExponentialIterations++;
	// Base cases
	if (n === 0) return 0;
	else if (n === 1) return 1;
	// Recursive part
	return exponentialTime(n - 1) + exponentialTime(n - 2);
}

let totalFactorialIterations = 0;
/**
 * Factorial time complexity example
 * In this example, we pass in an index number to return the nth Fibonacci number in the sequence, using recursion
 * @param {number} n
 * @return {number}
 */
const factorialTime = (n) => {
	//to avoid smokes and flames, lets limit the input to 10
	if (n > 10) return;

	totalFactorialIterations++;
	let num = n;
	if (n === 0) return 1;
	for (let i = 0; i < n; i++) {
		num = n * factorialTime(n - 1);
	}
	return num;
}


//inputs
const size = 1000000;
const index = 970000;
const searchVal = 985000;
const arr = Array.from(new Array(size), (x, i) => i + 1);
const arr1 = Array.from(new Array(200), (x, i) => i + 1);
const arr2 = Array.from(new Array(1300), (x, i) => i + 1);


//profiling tests
console.log("\n");

console.time('constantTime');
constantTime(arr, index);
console.timeEnd('constantTime');
console.log("\n");

console.time('linearTimeForwardArrayReverse');
linearTimeForwardArrayReverse(arr);
console.timeEnd('linearTimeForwardArrayReverse');
console.log("\n");

console.time('linearTimeForward');
linearTimeForward(arr, searchVal);
console.timeEnd('linearTimeForward');
console.log("\n");

console.time('linearTimeBackward');
linearTimeBackward(arr, searchVal);
console.timeEnd('linearTimeBackward');
console.log("\n");

console.time('logarithmicTime');
logarithmicTime(arr, searchVal);
console.timeEnd('logarithmicTime');
console.log("\n");

console.time('quadraticTime');
quadraticTime(arr1, arr2);
console.timeEnd('quadraticTime');
console.log("\n");

console.time('linearithmicTime');
linearithmicTime(size);
console.timeEnd('linearithmicTime');
console.log("\n");

console.time('exponentialTime');
exponentialTime(10);
console.log(`Total comparisons using exponentialTime = ${totalExponentialIterations}`);
console.timeEnd('exponentialTime');
console.log("\n");

console.time('factorialTime');
factorialTime(10);
console.log(`Total comparisons using factorialTime = ${totalFactorialIterations}`);
console.timeEnd('factorialTime');
console.log("\n");
