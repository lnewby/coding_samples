# Binary Search Algorithm for Javascript Arrays

This binary search extends the `Array.prototype` adding a new method for preforming  binary search for a value within array.

##Usage example
```javascript
var myArray = ['Emmanuel', 'John', 'Peter', 'Job', 'Saul', 'Jesus', 'David', 'Ruth'];

console.assert(myArray.binarySearch('David') === true);
console.assert(myArray.binarySearch('Judas') === false);
```
