const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  throw new CustomError('Not implemented');
  let count = 0;
  for (let i=0; i<matrix.length; i++){
      if (matrix[i] == '^^'){
        coutn+=count;
      }
  }
  return count;
};
