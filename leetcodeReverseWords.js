// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non - space characters.The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words.The returned string should only have a single space separating the words.Do not include any extra spaces.



//   Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
//   Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.


//   Constraints:

// 1 <= s.length <= 104
// s contains English letters(upper -case and lower -case), digits, and spaces ' '.
// There is at least one word in s.

//Psuedo code for solution:

/**
 * @param {string} s
 * @return {string}
 * @return reversed string
 *  words in s will be separated by at least one space
 * s = input of a string 
 * condition dealing with variable s that has multiple spaces that changes it to a single   space between words 
 Solution: 
 - create a variable to store reversed string 
 - use for loop 
 - use 2 conditionals
 - use method to trim white space 
 - use method split string into an array of words 
 - create a new array to store new string of words in reversed order
 -skip empty strings from multiple spaces
 - reverse method 
 - then join method

 */

 //Solution: 

var reverseWords = function (s) {
  // Step 1: Trim the input to remove any leading or trailing spaces
  s = s.trim();

  // Step 2: Split the string into an array of words
  let words = s.split(' ');

  // Step 3: Create a new array to store non-empty words (skip empty strings from multiple spaces)
  let validWords = [];

  for (let word of words) {
    if (word !== '') {
      validWords.push(word); // Only add non-empty words to the array
    }
  }

  // Step 4: Reverse the valid words array
  validWords.reverse();

  // Step 5: Join the words back into a string with a single space between them
  return validWords.join(' ');
};