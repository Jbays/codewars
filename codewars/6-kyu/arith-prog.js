// http://www.codewars.com/kata/find-the-missing-term-in-an-arithmetic-progression

// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.
//
// You have to write the function findMissing(list), list will always be at least 3 numbers. The missing term will never be the first or last one.
//
// Example
// findMissing([1, 3, 5, 9, 11]) == 7
// ```
//
// PS: This is a sample question of the facebook engineer challenge on interviewstreet. I found it quite fun to solve on paper using math, derive the algo that way. Have fun!

// function findMissing(list) {
//   let interval = 0;
//   let missing = 0;
//   for (let i=1;i<list.length;i++) {
//     if (Math.abs(interval) < Math.abs(list[i] - list[i-1])) {
//       interval = list[i] - list[i-1];
//       missing = list[i] - interval/2;
//     }
//   }
//   return missing;
// }

function findMissing(list){
  let step = (list[list.length - 1] - list[0]) / (list.length);
  return list.filter((val, index)=>{ return val !== (list[0] + index * step); })[0] - step;
}

console.log(findMissing([1,3,5,9,11]))
// console.log(findMissing([-12,-18,-30]))
