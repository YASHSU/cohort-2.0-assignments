/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(arr) {
    if (arr.length === 0) return undefined; // Handle empty array case
    return Math.max(...arr);
}

// Example usage:
console.log(findLargestElement([3, 7, 2, 9, 1])); // Output: 9
console.log(findLargestElement([-5, -1, -10, -3])); // Output: -1
console.log(findLargestElement([])); // Output: undefined
