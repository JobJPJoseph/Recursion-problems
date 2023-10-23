/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// your code here
let subsets = array => {
  let arr = [];

  for (let i = 0; i < array.length; i++) {
      if (array.length <= 1) {
          let subset = [array[i]];
          arr.push(...getSubset(subset));
      }

      for (let k = (i + 1); k < array.length; k++) {
          let subset = [array[i], array[k]];
          arr.push(...getSubset(subset));
      }

  }

  // Arrays are not equal to each other, they dont have the same space in memory.
  arr.push(array)
  let result = removedDuplicates(arr);


  return result;
}

function removedDuplicates(array) {
// Create an array to store the unique subarrays
  const uniqueSubarrays = [];

// Use a Set to keep track of the seen subarrays
  const seenSubarrays = new Set();

  for (const subarray of array) {
  // Convert the subarray to a string for Set comparison
      const subarrayStr = JSON.stringify(subarray);

  // If the subarray has not been seen, add it to the result and mark it as seen
      if (!seenSubarrays.has(subarrayStr)) {
          uniqueSubarrays.push(subarray);
          seenSubarrays.add(subarrayStr);
      }

  }

  return uniqueSubarrays;
}

let getSubset = array => {
  let subset = [];

  for (let i = 0; i < array.length; i++) {
      let element = array[i];
      let result = recurseSubset([element])
      subset.push(...result);
  }
  subset.push(array);

  return subset;
}

let recurseSubset = array => {
  if (array.length === 0) return [[]];

  let result = recurseSubset(array.slice(1));

  return [...result, array];
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
