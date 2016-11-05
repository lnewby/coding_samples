// isPalindrome Recursive Algorithm

// Base Case: if string.length <= 1 return true, it is a palindrome.
// Helper Methods:
// 1. firstCharacter() - return the first char of the string
// 2. lastCharacter() - return the last char of the string
// 3. middleSubString() - return the string minus the first and last char

// 4. isPalindrome() - use helper methods to finalize Algorithm

String.prototype.isPalindrome = (function () {

  var firstCharacter = function (str) {
    return str.slice(0,1);
  };

  var lastCharacter = function (str) {
    return str.slice(-1);
  };

  var middleSubString = function (str) {
    return str.slice(1,-1);
  };

  // palindrome Algorithm
  var palindrome = function () {
    var that = this.toLowerCase();
    console.log('sub problem: ' + that);

    // Base Case #1
    if(that.length <= 1) {
      return true;
    };

    // Base Case #2
    if(firstCharacter(that) !== lastCharacter(that)) {
      return false;
    }

    return middleSubString(that).isPalindrome();
  };

  return palindrome;
}());

// Unit test
console.assert('Lance'.isPalindrome() === false);
console.assert('a'.isPalindrome() === true);
console.assert(' '.isPalindrome() === true);
console.assert('Arewenotdrawnonwardtonewera'.isPalindrome() === true);
