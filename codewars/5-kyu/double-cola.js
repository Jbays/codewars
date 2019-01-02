/**

  https://www.codewars.com/kata/double-cola/javascript

  5 kyu - double cola

  Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; there are no other people in the queue. The first one in the queue (Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end of the queue. Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.

  For example, Penny drinks the third can of cola and the queue will look like this:

  Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
  Write a program that will return the name of the person who will drink the n-th cola.

  Input
  The input data consist of an array which contains at least 1 name, and single integer n.

  1  ≤  n  ≤  1000000000
  Output / Examples
  Return the single line — the name of the person who drinks the n-th can of cola. The cans are numbered starting from 1.

  whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1) == "Sheldon"
  whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52) == "Penny"
  whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951) == "Leonard"

*/

function whoIsNext(array,number){
  if ( number <= array.length ) {
    return array[number-1]
  }

  let base = array.length;

  function getIndex(n, i) {
    i = i || base;
    if (n < i) {
      return Math.floor(n * base / i);
    }
    return getIndex(n - i, 2 * i);
  }

  return array[getIndex(number - 1)];
}

let arr1 = ["Sheldon","Leonard","Penny","Rajesh",'Howard'];

// console.log(whoIsNext(arr1,1));
// console.log(whoIsNext(arr1,52));
// console.log(whoIsNext(arr1,7230702951));