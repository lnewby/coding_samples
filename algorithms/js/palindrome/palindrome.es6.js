// isPalindrome Recursive Algorithm

// Base Case: if string.length <= 1 return true, it is a palindrome.
// Helper Methods:
// 1. firstCharacter() - return the first char of the string
// 2. lastCharacter() - return the last char of the string
// 3. middleSubString() - return the string minus the first and last char

// 4. isPalindrome() - use helper methods to finalize Algorithm

String.prototype.isPalindrome = (function () {

  const firstCharacter = str => str.slice(0,1);

  const lastCharacter = str => str.slice(-1);

  const middleSubString = str => str.slice(1,-1);

  // palindrome Algorithm
  const palindrome = function () {
    const str = this.toLowerCase();
    console.log('sub problem: ' + str);

    // Base Case #1
    if(str.length <= 1) {
      return true;
    };

    // Base Case #2
    if(firstCharacter(str) !== lastCharacter(str)) {
      return false;
    }

    return middleSubString(str).isPalindrome();
  };

  return palindrome;
}());
