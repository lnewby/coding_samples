import scala.annotation.tailrec
// Scala

/**
 * Binary Search:
 * - Enter a value to determine if it is in the array.
 */

@tailrec
def binarySearch(List: Array[Int], target: Int): Boolean = {
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