/*

  Basic Set 1.2: Searching for a number in an array
    Given a divider number and an array of numbers, return true if the array contains a non-zero number evenly divisible by the divider, and false otherwise.

    DO NOT use array.find()

    DO use a for loop.

    TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.

    Examples
    
    Input
      divider: 5
      array: [ 8, 10 ]
    Output
      true
    
    Input
      divider: 5
      array: [ 8, 11 ]
    Output
      false
*/

//time complexity: O(n) where n is the length of the array
function findDivisible(divider, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0 && array[i] % divider === 0) {
      return true;
    }
  }
  return false;
}

