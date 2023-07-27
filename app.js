// Problem: 1
// Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.
function reverseString(inputString) {
  let reversedString = "";

  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }
  return reversedString;
}

console.log(reverseString("hello world")); //dlrow olleh

// Problem: 2
// Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

function sumPositiveNumbers(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(sumPositiveNumbers([2, -5, 10, -3, 7])); // 19

// Problem: 3
// Write a JavaScript program to find the most frequent element in an array and return it.

function findFrequentNumber(arr) {
  if (arr.length === 0) {
    return null;
  }

  const frequencyMap = new Map();

  arr.forEach((element) => {
    frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
  });

  let frequentNumber;
  let maxFrequency = 0;

  frequencyMap.forEach((frequency, element) => {
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      frequentNumber = element;
    }
  });

  return frequentNumber;
}

console.log(findFrequentNumber([3, 5, 2, 5, 3, 3, 1, 4, 5]));
