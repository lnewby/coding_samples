// insertionSort (mutates current array)
Array.prototype.insertionSort = (function() {

  const insert = (that, rightIndex, value) => {
    // TODO: What is the best way to make thie insertion sort algorithm not mutate the
    // original array?

    let i;
    for(i=rightIndex; i > -1 && that[i] > value; i--) {
        that[i + 1] = that[i];
    }

    that[i+1] = value;
  };

  return function() {
    let that = this;

    console.log(that.length);
    for(let i = 1; i < that.length; i++) {
      console.log(`insert(${i-i}, ${that[i]})`);
      insert(that, i-1, that[i]);
    }
  };
}());

// test
let al = [9,8,7,6,5,4,3,2,1,0].insertionSort();

console.assert(
  al[0] === 0,
  al[1] === 1,
  al[2] === 2,
  al[3] === 3,
  al[4] === 4,
  al[5] === 5,
  al[6] === 6,
  al[7] === 7,
  al[8] === 8,
  al[9] === 9
);
