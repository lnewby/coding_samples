// Javascript

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

/**
 * Binary Search:
 * - Pick number between 0 and 100
 */
Array.prototype.binarySearch = function(target) {
  var min = 0;
  var max = this.length - 1;

  // Pick the middle element in the array
  var searchIndex = Math.floor(max / 2);

  if(max < 0) { return false; } // if guard to prevent array out of bounds error
  console.log('Array[' + searchIndex + '] = ' + this[searchIndex]);

  // If element pick is the target element return its location in the array
  if(this[searchIndex] === target) {
    return true;
  }

  // If element picked is < target element set the new min element to one plus the current element picked
  // else set the new max to one less than the current element picked.
  if(this[searchIndex] < target) {
    min = searchIndex + 1;
  } else {
    max = searchIndex - 1;
  }

  // check the new slice of the array recursively.
  return this.slice(min, max+1).binarySearch(target);
}

/**
 * Unit-Tests
 */
console.assert(primes.binarySearch(-1) === false);
console.assert(primes.binarySearch(0) === false);
console.assert(primes.binarySearch(1) === false);
console.assert(primes.binarySearch(2) === true);
console.assert(primes.binarySearch(97) === true);
console.assert(primes.binarySearch(100) === false);
