/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  
  // Remove non-alphanumeric characters and convert to lowercase
    str1 = str1.replace(/\W/g, '').toLowerCase();
    str2 = str2.replace(/\W/g, '').toLowerCase();

    // If lengths don't match, they can't be anagrams
    if (str1.length !== str2.length) return false;

    // Sort and compare the characters
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// Example usage:
console.log(isAnagram("spar", "rasp")); // true
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false

