// Selection sort
// 1. Create swap() to switch to elements in the Array
// 2. Create indexOfMin() to get the index of minimum value in sub Array
// 3. Create selection sort algorithm using swap and indexOfMin helper functions

// swap
var swap = function (array, firstIndex, secondIndex) {
  var tmp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = tmp;
}

// indexOfMin
var indexOfMin = function (array, startIndex) {
  var minIndex = startIndex;

  for( var i = minIndex+1; i < array.length; i++) {
    if(array[i] < array[minIndex]) {
      minIndex = i;
    }
  }

  return minIndex;
}

// selectionSort
var selectionSort = function (array) {
  var minIndex = 0;
  for(var i = 0; i < array.length; i++){
    minIndex = indexOfMin(array, minIndex);
    swap(array, i, minIndex);
  }
}

// Unit tests
var a1 = [5,4,3,2,1];
// test swap()
swap(a1,0,3);
console.assert( a1[0] === 2 && a1[3] === 5);
// test indexOfMin()
console.assert(indexOfMin(a1, 0) === 4);
// test selectionSort()
selectionSort(a1);
console.assert(
  a1[0] === 1,
  a1[1] === 2,
  a1[2] === 3,
  a1[3] === 4,
  a1[4] === 5
);
