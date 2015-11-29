import scala.annotation.tailrec
// Scala

/**
 * Binary Search:
 * - Enter a numvalue to determine if it is in the array.
 */

@tailrec
def binarySearch(List: Array[Int], target: Double): Boolean = {
  var min: Int = 0
  var max: Int = List.length

  // if guard to prevent array out of bounds error or invalid input value.
  if(max <= min) return false

  // Make sure array is in sorted order as required for binary search.

  val sortedArray = List.sorted

  // Pick the middle element in the array
  val searchIndex = (max / 2)
  println(s"Array[$searchIndex] = ${sortedArray(searchIndex)}")

  // If element pick is the target element return its location in the array.
  if(sortedArray(searchIndex) == target) return true

  // If element picked is < target element set the new min element to one plus the current element picked
  // else set the new max to one less than the current element picked.

  if(sortedArray(searchIndex) < target) {
    min = searchIndex + 1
  } else {
    max = searchIndex - 1
  }

  // Check the new slice of the array recursively.
  return binarySearch(sortedArray.slice(min, max + 1), target)
}


/**
  * Unit-Tests
  */

val primes = Array(31, 5, 7, 71, 11, 13, 19, 89, 97, 23, 29, 37, 3, 41, 43, 47, 2, 53, 59, 61, 67,  73, 79, 83, 17);

assert (binarySearch(primes, -1) == false)
assert (binarySearch(primes, 0) == false)
assert (binarySearch(primes, 1) == false)
assert (binarySearch(primes, 2) == true)
assert (binarySearch(primes, 97) == true)
assert (binarySearch(primes, 100) == false)
assert (binarySearch(primes, 1000000) == false)
assert (binarySearch(primes, 97.9) == false)