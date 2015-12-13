/**
 * Selection Sort:
 * @param
 * @return n/a - sorts array in place
 */

// Selection sort
// 1. Create swap() to switch to elements in the Array
// 2. Create indexOfMin() to get the index of minimum value in sub Array
// 3. Create selection sort algorithm using swap and indexOfMin helper functions
Array.prototype.selectionSort = (function () {

  /**
   * Swap method:
   * @param array - this array being sorted
   * @param firstIndex - index of one array value to be swapped
   * @param secondIndex - index of second array value to be swapped
   * @return n/a - swaps the values of the array in place
   */
  var swap = function (array, firstIndex, secondIndex) {
    var tmp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = tmp;
  };

  /**
   * indexOfMin method:
   * @param array - this array being sorted
   * @param startIndex - starting index of sub array
   * @return minIndex - index of minimum value in subarray
   */
  var indexOfMin = function (array, startIndex) {
    var minIndex = startIndex;

    for( var i = minIndex+1; i < array.length; i++) {
      if(array[i] < array[minIndex]) {
        minIndex = i;
      }
    }
    return minIndex;
  };

  // selectionSort
  return function () {
    var that = this;
    var minIndex = 0;
    for(var i = 0; i < that.length; i++){
      minIndex = indexOfMin(that, i);
      swap(that, i, minIndex);
    }
  };
}());

// Unit tests
var a1 = [5,4,3,2,1];
a1.selectionSort();
console.assert(
  a1[0] === 1,
  a1[1] === 2,
  a1[2] === 3,
  a1[3] === 4,
  a1[4] === 5
);
