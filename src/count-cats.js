const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  let count = 0;
    if (Array.isArray(arr)) {
      if (arr.length === 0) {}
      arr.forEach(element => {
          element.map(elem => elem === "^^" ? count++ : count);
        });
        if (count == 0) return 0;
        return count;
    } else {
      return false;
    }
}

module.exports = {
  countCats
};
