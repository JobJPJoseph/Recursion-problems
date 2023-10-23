/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
let flatten = array => {
  const flattened = [];

  function generateFlatten(arr) {
      if (Array.isArray(arr)) {
          if (arr.length === 0) return [];
      } else {
          flattened.push(arr);
          return;
      }

      for (let i = 0; i < arr.length; i++) {
          let elem = arr[i];
          generateFlatten(elem);
      }

      return;
  }

  generateFlatten(array);

  return flattened;
}
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
