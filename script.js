// const favoriteNumber1 = 1;
// const favoriteNumber2 = 4;
// const favoriteNumber3 = 76;

// // const favoriteNumbers = `${favoriteNumber1} ${favoriteNumber2} ${favoriteNumber3}`;

// const favoriteNumbers = [favoriteNumber1, favoriteNumber2, favoriteNumber3, 5];

// //insert an item to the end of the array
// favoriteNumbers.push(3, 9)

// // inserts an item to the start of the array
// favoriteNumbers.unshift(0);

// console.log(favoriteNumbers);

// // pop takes out the last item from array
// // favoriteNumbers.pop();
// // shift takes out the first item from the array
// // favoriteNumbers.shift();

// console.log(favoriteNumbers[favoriteNumbers.length - 1]);
// console.log(favoriteNumbers.flat(-1));
// favoriteNumbers.reverse();
// const arraySample = [`some text`, 1, { text: 'abc', arr: [] }, () => {}, true, undefined, null];

// 1. Write a loop/cycle that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
// 2. Write a function that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the nubmer,
// and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// 2.1 Once you have that working, modify your function to print "FizzBuzz" for members that are divisible by both 3 and 5 ( and still print "Fizz" or "Buzz" for numbers divisible by only one of those)
// 3. Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end. for example: range(1, 3) // [1, 2, 3]
// 4. Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elemens
// in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

let i;

for (let i = 1; i < 8; i += 1) {
  console.log(`${"#"}`);
}

let digits;

for (let digits = 1; digits < 101; digits++) {
  if (digits % 15 == 0) {
    console.log("FizzBuzz");
  } else if (digits % 3 == 0) {
    console.log("Fizz");
  } else if (digits % 5 == 0) console.log("Buzz");
  else console.log(digits);
}

// const arr = [1, 2, 3]
// arr.reverse(); // [3, 2, 1]

const logTriangle = () => {
  const triangleChar = "#";
  for (let char = "#"; char.length <= 7; char += "#") {
    console.log(char.length);
    console.log(char);
  }
};
// 1   3
const range = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
};

const reverseArray = (array) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.unshift(array[1]);
  }

  return result;
};

const reverseArrayInPlace = (array) => {
  const result = [];

  for (;array.length > 0;) {
    result.push(array.pop())
  }

  return result;
}; 

const arrToBeModified = [1, 2, 3]

