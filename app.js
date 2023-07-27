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

// Problem: 4
// Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
function findTwoNumbersWithSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null; // Return null if no such pair found
}

const sortedArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;

console.log(findTwoNumbersWithSum(sortedArray, targetValue)); // Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

// Problem: 5
//  Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Error: A number divided by zero is not allowed.";
      }
      return num1 / num2;
    default:
      return "Error: Invalid.";
  }
}
console.log(calculate(15, 3, "/")); // 5

// Problem: 6
// Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
function randomPassword(length) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  const allCharacters =
    uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }

  return password;
}

const passwordLength = 6;
const generatedPassword = randomPassword(passwordLength);
console.log(generatedPassword);

// Problem: 7
// Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInt(romanNumber) {
  const romanValueMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  romanNumber = romanNumber.toUpperCase();

  let result = 0;

  for (let i = 0; i < romanNumber.length; i++) {
    const currentNumber = romanValueMap[romanNumber[i]];
    const nextNumber = romanValueMap[romanNumber[i + 1]];

    if (nextNumber > currentNumber) {
      result += nextNumber - currentNumber;
      i++; // Skip the next numeral as it's already accounted for
    } else {
      result += currentNumber;
    }
  }

  return result;
}

console.log(romanToInt("xiv")); // 14

// Problem: 8
// Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return "Array must contain at least two elements.";
  }

  arr.sort((a, b) => a - b);

  let secondSmallest = arr[1];

  return secondSmallest;
}

console.log(findSecondSmallest([4, 6, 8, 12, 1])); // 4
