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
  calculateDepth(arr, count = 0) {
    this.maxLevel = 0;
    if (arr.length === 0){
      return count +=1;
    }
    else {
      count += 1;
      this.maxLevel = this.maxLevel < count ? count : this.maxLevel
    }
    arr.forEach(el => {
        if (Array.isArray(el)){
          this.maxLevel = Math.max(this.maxLevel, this.calculateDepth(el, count))
        }
    });
    return this.maxLevel;
  }
}

module.exports = {
  DepthCalculator
};
