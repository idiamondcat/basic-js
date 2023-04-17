const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  if (arr.length === 0) return [];
  let newArr = [...arr];
  newArr.forEach((elem, idx) => {
      if (elem === '--discard-next') {
          if (elem !== newArr[0] && elem !== newArr[newArr.length - 1]) {
              newArr.splice(idx, 2);
          } else {
            newArr.splice(idx, 1);
          }
      }
      if (elem === '--discard-prev') {
          if (elem !== newArr[0] && elem !== newArr[newArr.length - 1]) {
              newArr.splice(idx-1, 2);
          } else {
            newArr.splice(idx, 1);
          }
      }
      if (elem === '--double-next') {
          if (elem !== newArr[0] && elem !== newArr[newArr.length - 1]) {
              newArr.splice(idx, 1, idx + 1);
          } else {
            newArr.splice(idx, 1);
          }
      }
      if (elem === '--double-prev') {
          if (elem !== newArr[0] && elem !== newArr[newArr.length - 1]) {
              newArr.splice(idx, 1, idx);
          } else {
            newArr.splice(idx, 1);
          }
      }
  })
return arr;
}

module.exports = {
  transform
};
