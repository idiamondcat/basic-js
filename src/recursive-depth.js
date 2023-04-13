const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(a) {
    if (Array.isArray(a)) {
      let level = 1;
      for (let elem of a) {
          level = Math.max(level, calculateDepth(elem));
      }
      return level;
    } else {
        return 0;
    }
  }
}

module.exports = {
  DepthCalculator
};
