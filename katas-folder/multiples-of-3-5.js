// https://www.codewars.com/kata/multiples-of-3-or-5/javascript
// If we list all the natural numbers below 10 that are multiples of 3 or 5, 
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 
// below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  }
  
//   solution(10);

function multiply (a, b) {
  return a * b;
}

function timesCreator (a) {
  return function (b) {
      return multiply(a, b);
  }
}

timesTwo = timesCreator(2);
timesTwelve = timesCreator(12);

// Outputs: 4
console.log(timesTwo(2));

// Outputs: 24
console.log(timesTwelve(2));