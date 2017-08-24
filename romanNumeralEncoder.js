'use strict';

//Create a function taking a positive integer as its parameter
//and returning a string containing the Roman Numeral representation
// of that integer.

//Modern Roman numerals are written by expressing each digit separately
//starting with the left most digit and skipping any digit with a value of zero.
//In Roman numerals
//1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC.
//2008 is written as 2000=MM, 8=VIII; or MMVIII.
//1666 uses each Roman symbol in descending order: MDCLXVI.

//Example:

//solution(1000); // should return 'M'
// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

// More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

function solution(number){
  let output = "";
  const numArr = (number.toString()).split('');
  const totalDigits = numArr.length-1;

  const romanNumeralObj = {
    "1":"I",
    "5":"V",
    "10":"X",
    "50":"L",
    "100":"C",
    "500":"D",
    "1000":"M"
  };

  numArr.forEach(function(leftmostDigit,index){
    let trailingZeros = "0".repeat(totalDigits-index);
    leftmostDigit = (leftmostDigit+trailingZeros).toString();
    // console.log("trailingZeros>>",trailingZeros);
    // console.log("index>>",index);

    //this is not currently pathing in correct
    //but the basic plan is to decompose these input numbers
    //one decimal place at a time

    //this all needs to happen in an orderly fashion
    //decimal place by decimal place is probably best

    (Object.keys(romanNumeralObj).reverse()).forEach(function(romNumKey){
      console.log("this is romNumKey",romNumKey);
      // if ( romanNumeralObj[leftmostDigit] ) {
      //   output+=romanNumeralObj[leftmostDigit]
      // } else {
      //   console.log("       leftmostDigit>>",leftmostDigit);
      //   console.log("typeof leftmostDigit>>",typeof leftmostDigit);
      // }
    })



  })
  return "This is output>>>> "+output;
}

console.log(solution(1666)) //==> MDCLXVI
// solution(1990)
// solution(2008)
