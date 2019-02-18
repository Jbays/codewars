/*

  https://app.codility.com/c/run/demoU7JMBT-Z52/

  This is a demo task.

  Write a function:

  function solution(A);

  that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

  For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

  Given A = [1, 2, 3], the function should return 4.

  Given A = [−1, −3], the function should return 1.

  Write an efficient algorithm for the following assumptions:

  N is an integer within the range [1..100,000];
  each element of array A is an integer within the range [−1,000,000..1,000,000].


*/

const INPUT_1 = [1, 3, 6, 4, 1, 2]; //=>5
const INPUT_2 = [1, 2, 3]; //=> 4
const INPUT_3 = [-1,-3]; //=> 1
function solution(A){
  A = A.sort((a,b)=>{return a-b});
  for ( let i = 1; i <= 100000; i++ ) {
    if ( A.indexOf(i) === -1 ) {
      return i;
    }
  }
}

console.log(solution(INPUT_1));