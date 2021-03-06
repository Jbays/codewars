//NUM1BITS

// Write a function that takes an unsigned integer and returns the number of 1 bits it has.

//   Example:

// The 32 - bit integer 11 has binary representation

// 00000000000000000000000000001011
// so the function should return 3.

let input1 = '00000000000000000000000000001011';

function countBinaryOnes(binary){
  let count = 0;
  
  for ( let i = 0; i < binary.length; i++ ) {
    if ( binary[i] === '1' ) {
      count++;
    }
  }

  return count;
}

console.log(countBinaryOnes(input1));