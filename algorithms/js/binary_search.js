// Javascript

/**
 * Binary Search:
 * - Enter a value to determine if it is in the array.
 */
Array.prototype.binarySearch = function(target) {
  var min = 0;
  var max = this.length - 1;

  // if guard to prevent array out of bounds error or invalid input value.
  if(max < min) { return false; }

  // Make sure array is in sorted order as required for binary search.
  function numberCompare(a, b){ return a-b; }

  var sortedArray = (typeof this[0] === 'number') ? this.sort(numberCompare) : this.sort();

  // Pick the middle element in the array
  var searchIndex = Math.floor(max / 2);
  console.log('Array[' + searchIndex + '] = ' + sortedArray[searchIndex]);

  // If element pick is the target element return its location in the array.
  if(sortedArray[searchIndex] === target) {
    return true;
  }

  // If element picked is < target element set the new min element to one plus the current element picked
  // else set the new max to one less than the current element picked.
  if(sortedArray[searchIndex] < target) {
    min = searchIndex + 1;
  } else {
    max = searchIndex - 1;
  }

  // Check the new slice of the array recursively.
  return sortedArray.slice(min, max + 1).binarySearch(target);
}

/**
 * Unit-Tests
 */
 var primes = [31, 5, 7, 71, 11, 13, 19, 89, 97, 23, 29, 37, 3, 41, 43, 47, 2, 53, 59, 61, 67,  73, 79, 83, 17];

console.assert(primes.binarySearch(-1) === false);
console.assert(primes.binarySearch(0) === false);
console.assert(primes.binarySearch(1) === false);
console.assert(primes.binarySearch(2) === true);
console.assert(primes.binarySearch(97) === true);
console.assert(primes.binarySearch(100) === false);
console.assert(primes.binarySearch(1000000) === false);
console.assert(primes.binarySearch('string input edge case') === false);
