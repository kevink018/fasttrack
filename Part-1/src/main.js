// Adds 2 to inputted number
// ex: addTwo(5); -> 7
// ex: addTwo(6); -> 8
const addTwo = (number) => {
	//CODE HERE
	return number+2;
}

// Adds the two inputted numbers together
// ex: add(5, 10); -> 15
const add = (num1, num2) => {
	//CODE HERE
	return num1+num2;
}

// Multiplies the inputted number by 2
// ex: multiplyByTwo(5); -> 10
// ex: multiplyByTwo(6); -> 12
const multiplyByTwo = (numero) => {
	//CODE HERE
	return numero*2;
}


// Multplies the two inputted numbers together
// ex: multiply(1,2); -> 2
// ex: multiply(2,2); -> 4
const multiply = (val1, val2) => {
	//CODE HERE
	return val1*val2;
}

// Returns the square of the inputted number
// ex: square(5); -> 25
const square = (value) => {
	//CODE HERE
	return value**2;
}

// Determines if the number is odd
// outputs true if the number is odd
// outputs false if the number is even
// ex: isOdd(4); -> false
// ex: isOdd(5); -> true
const isOdd = (num) => {
	//CODE HERE
	return num%2 === 1;
}


// Determines if the number is negative
// Outputs true if the number is negative
// Outputs false if the number is zero or positive
// ex: isNegative(-1); -> true
// ex: isNegative(1); -> false
// ex: isNegative(0); -> false
const isNegative = (num) => {
	//CODE HERE
	return num < 0;
}


// Returns the absolute value of the inputted number
// ex: positive(-1); -> 1
// ex: positive(1); -> 1
const positive = (num) => {
	//CODE HERE
	return Math.abs(num);
}

// Returns boolean of whether argument is classified as a Number object
// ex: isNumber(5); → true
// ex: isNumber('hi'); → false
const isNumber = (value) => {
	//CODE HERE
	return Number(value);
}

// Returns boolean of whether argument is classified as an Array object
// ex: isArray(5); → false
// ex: isArray([1,2,3]); → true
const isArray = (value) => {
	//CODE HERE
	return Array.isArray(value);
}

// Returns boolean of whether argument is classified as an Object
// ex: isObject(5); → false
// ex: isObject([1,2,3]); → true
const isObject = (value) => {
	//CODE HERE
	return Array.isArray(value);
}

// Return boolean of whether argument is classified as null
// ex: isNull(null); -> true
// ex: isNull(5); -> false
const isNull = (value) => {
	//CODE HERE
	return value === null;
}


///////////////INTERMEDIATE CHALLENGES///////////////

// This function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
const returnOdds = (array) => {
	//CODE HERE
	const output = []
	for (let i= 0; i<array.length; i++) {
		if (array[i] % 2 === 1) {
			output.push(array[i])
		}
	}
	return output
}


// This function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
const returnEvens = (array) => {
	//CODE HERE
	const output = []
	for (let i= 0; i<array.length; i++) {
		if (array[i] % 2 === 0) {
			output.push(array[i])
		}
	}
	return output
}


// Returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
const findMax = (array) => {
	//CODE HERE
	let max = array[0];
	for (let i= 0; i<array.length; i++) {
		if (array[i] > max) {
			max = array[i]
		}
	}
	return max
}


//  remove leading and trailing whitespace or specified characters from string
//  ex: trim(' hello '); -> 'hello'

const trim = (string) => {
	//CODE HERE
	return string.replaceAll(' ', '')

}

// Returns an empty array object. This object should have the following methods:
// push(val) adds val to the end of the array
// pop() removes a value from the end and returns it
// unshift(val) adds val to the beginning of the array
// shift() removes a value from the beginning and returns it
// the goal of this problem is to reverse engineer what array methods are actually doing and return an object that has those methods
const createArray = () => {
	//CODE HERE
	let array = [];

	return {
		push: (val) => {
			array.push(val)
		},

		getArray: () => {
			return array;
		},

		pop: (val) => {
			return array.pop();
		},

		unshift: (val) => {
			return array.unshift();
		},

		shift: (val) => {
			array.shift(val);
		}
	}

}

///////////////ADVANCED CHALLENGES///////////////

// Iterates over elements of an array invoking callback for each element. The callback should be passed the element, the current index, and the entire array.
// const callback = function(element, index, array) {
//  console.log(element +"," +index +"," +array);
// }
// forEach(['a','b','c'], callback); → prints a,0,['a','b','c'] b,1,['a','b','c'] c,2,['a','b','c']
// For each element in the array, the callback we passed is called. The callback can be customized, but in the above example, the callback prints out the element, index, and entire array.
const forEach = (array, callback) => {
	//CODE HERE
	for (let i = 0; i<array.length; i++) {
		callback(array[i], i, array)
	}
}

// Creates an array of values by running each element in collection through callback
// Should we explain that map returns?
// Callback (element/value, index/key, array)
// map([1,2,3], function(element, index, array) {
//  return element * 3;
// }); -> [3,6,9]
// BONUS: use the forEach method you use to create map
const map = (array, callback) => {
	//CODE HERE
	array.forEach(ele => {
		output.push(callback(ele))
	})
}

// Iterates over elements of collection, returning an Array of all elements callback returns truthy for.
// filter([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [2,4]
// filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [1,3]
const filter = (collection, callback) => {
	//CODE HERE
	if (Array.isArray(collection)) {
		return collection.filter(callback)
	} else if (typeof collection == 'object' && collection !== null) {
		const filterObj = {}
		Object.keys(collection).forEach(key => {
			if (callback(collection[key], key, collection)) {
				filterObj[key] = collection[key]
			}
		})
		return filterObj
	} else {
		return undefined
	}
}

// Removes all elements from array that callback returns truthy for and returning a collection of elements that did not pass the truthy test.
// The returned collection should be the same type that was passed in, either an Array or Object.
// reject([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [1,3]
// reject({a:1, b:2, c:3, d:4}, function(value, key, collection) {
//  return element % 2 !== 0;
// }); → {b:2, d:4}
// Challenge: use filter
const reject = (collection, callback) => {
	//CODE HERE
	if (Array.isArray(collection)) {
		return collection.filter(function(element, index, array) {
			return !callback(element, index, array)
		}); 
	} else if (typeof collection == 'object' && collection !== null) {
		const filterObj = {}
		Object.keys(collection).forEach(key => {
			if (!callback(collection[key], key, collection)) {
				filterObj[key] = collection[key]
			}
		})
		return filterObj
	} else {
		return undefined
	}
}

// Creates an array without duplicate values from the inputted array.
// The order of the array is preserved.
// uniq([1,2,1]); → [1,2]
const uniq = (array) => {
	//CODE HERE
	const uniqueArr = Array.from(new Set(array))
	return uniqueArr
}

// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// DO NOT USE THE BUILT-IN INDEXOF function
// indexOf([11,22,33], 11); → 0
// indexOf([11,22,33], 5); → -1
const indexOf = (array, value) => {
	//CODE HERE
	for (let i=0; i< array.length; i++) {
		if (array[i] === value) {
			return i
		}
	}
	return -1
}


// Returns a function that is restricted to invoking func once.
// Repeat calls to the function return the value of the first call.
const once = (func) => {
	//CODE HERE
	let result;

	return function (...args) {
		if (!result) {
			result = func (...args)
		}
		return result;
	}
}

// Reduces collection to a value which is the accumulated result of running each element in collection through iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not provided the first element of collection is used as the initial value.
// If a start parameter is not provided, then set the start value as the zeroth index
// reduce([1,2], function(stored,current) {
//  return stored + current;
// }); → 3
// reduce([1,2], function(stored,current) {
//  return stored + current;
// },1); → 4
const reduce = (array, callback, start) => {
	//CODE HERE
	let acc = start;

	array.forEach( ele => {
		acc = callback(acc, ele)
	})
	return acc
}

// Takes an array and a function as arguments.
// Returns true if the function produces true when each array element is passed to it.
// Otherwise it returns false.
// every([2, 4, 6], function(elem) {
//   return elem % 2 == 0;
// });  -> true
// every([2, 4, 7], function(elem) {
//   return elem % 2 == 0;
// });  -> false
// BONUS: use reduce in your answer
const every = (array, func) => {
	//CODE HERE
	for (let i= 0; array.length; i++) {
		if (!func(array[i])) {
			return false;
		}
	}
	return true;
}

// Flattens a nested array.
// ex: flatten([1, [2, 3, [4]]]); → [1, 2, 3, [4]]
const flatten = (array) => {
	//CODE HERE
	return array.reduce((output, curr) => {
		return output.concat(Array.isArray(current) ? current : [current]);
	}, [])
}

// Recursively flattens a nested array.
// ex: flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]
const flattenDeep = (array) => {
	//CODE HERE
	let output = []
	array.forEach (ele => {
		if (Array.isArray(ele)) {
			output = output.concat(flattenDeep(ele))
		} else {
			output.push(ele)
		}
	})
	return output
}

// Create a shallow copy of an object
// const obj1 = {a:1, b: {c: 3}};
// const obj2 = copyShallow(obj1);
// obj2 → {a:1, b: {c: 3}};
// obj1 === obj2; → false
// obj1.b === obj2.b → true
const copyShallow = (obj) => {
	//CODE HERE
	return { ...obj }
}

// Create a deep copy of an object
// const obj1 = {a:1, b: {c: 3}};
// const obj2 = copyShallow(obj1);
// obj2 → {a:1, b: {c: 3}};
// obj1 === obj2; → false
// obj1.b === obj2.b → false
const copyDeep = (obj) => {
	//CODE HERE	
	if (obj = null || typeof obj !== 'object') {
		return obj;
	}

	let copyObj = Array.isArray(obj) ? [] : {}

	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			copyObj[key] = copyDeep(obj[key])
		}
	}
	return copyObj;
}
