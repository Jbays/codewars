'use strict';

// Build Tower

// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *


// for example, a tower of 3 floors looks like below
//[
//   '  *  ',
//   ' *** ',
//   '*****'
// ]

function towerBuilder(nFloors) {
  let output = ["*"];

  if (nFloors === 1){return output}

  for (let i=2;i<=nFloors;i++ ){
    let newFloor = output[i-2]+"**";
    output.push(newFloor)
  }

  output[0] = " * ";
  return output
}

// towerBuilder(1) ==> ["*"];
// towerBuilder(2) ==> [" * ","***"];
// towerBuilder(3) ==> ["  *  "," *** ","*****"];

// console.log(towerBuilder(1))
// console.log(towerBuilder(2))
// console.log(towerBuilder(3))
console.log(towerBuilder(4))
console.log(towerBuilder(5))
console.log(towerBuilder(6))
