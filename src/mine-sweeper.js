const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
           for (let j = 0; j < matrix[i].length; j++) {
          let count = 0;
          if (matrix[i][j] === true) {
                  arr.push(1);
          } else {
              if (matrix[i][j + 1] !== undefined) {
                  if (matrix[i][j + 1] === true) {
                      count += 1;
                  }
              }
              if (matrix[i][j - 1] !== undefined) {
                  if (matrix[i][j - 1] === true) {
                      count += 1;
                  }
              }
              if (matrix[j][i + 1] !== undefined) {
                  if (matrix[j][i + 1] === true) {
                      count += 1;
                  }
              }
              if (matrix[j][i - 1] !== undefined) {
                  if (matrix[j][i - 1] === true) {
                      count += 1;
                  }
              }
              if (i === j) {
                  if (i - 1 >= 0 && j - 1 >= 0) {
                      if (matrix[i - 1][j - 1] === true) {
                          count += 1;
                      }
                  }
                  if (i + 1 < matrix.length && j + 1 < matrix.length) {
                      if (matrix[i + 1][j + 1] === true) {
                          count += 1;
                      }
                  }
              }
              if (j === matrix.length - i - 1) {
                  if (matrix.length - (i + 1) - 1 > 0) {
                      if (matrix[i + 1][matrix.length - (i + 1) - 1] === true) {
                          count += 1;
                      }
                  }
                  if (matrix.length - (i - 1) - 1 < matrix.length) {
                      if (matrix[i - 1][matrix.length - (i - 1) - 1] === true) {
                          count += 1;
                      }
                  }
              }
              arr.push(count);
          }
      }
  }
  let newarr = [];
  for (let i = 0; i < Math.ceil(arr.length/matrix.length); i++) {
      newarr[i] = arr.slice((i * matrix.length), (i * matrix.length) + matrix.length);
  }
  return newarr;
}

module.exports = {
  minesweeper
};
