/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// your code here
let permutations = array => {

  const allPermutations = [];

  function generatePermutations(array, current) {
    if (current.length === array.length) {
        allPermutations.push([...current]);
        return;
    }

    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        if ( !current.includes(element) ) {
            current.push(element);
            generatePermutations(array, current); // This was missed placed
            current.pop(); // We missed this
        }

    }

  }

  generatePermutations(array, []);

  return allPermutations;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
