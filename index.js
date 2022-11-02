function hasTargetSum(array, target) {
  // Write your algorithm here
  //look through each integer in the array
  for (let i = 0; i < array.length; i++) {
    //look through the rest of the array
   for (let j = i + 1; j < array.length; j++) {
    //compare target to each element in the array added together
    if (target == array[i] + array[j]) {
      return true
    }
   }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  Quadratic TimeL 0(n2)
*/

/* 
  Add your pseudocode here
 Add all combinations of each possible pair of numbers in the array and compare
 the sum of each to the target number.
 If any of the sums from the array are equal to the target number, return true. 
*/

/*
  Add written explanation of your solution here
 The function should return true if any pair of numbers in the array passed in as an
 argument add up to the target number passed into the argument. 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 4, 6, 8, 10], 14))
}

module.exports = hasTargetSum;
