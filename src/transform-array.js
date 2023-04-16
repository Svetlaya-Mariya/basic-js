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
  let newArr = [];
  if (arr && Array.isArray(arr) && arr instanceof Array){
    for (let i=0; i<arr.length; i++){
      if (arr[i] ==="--double-next") {
        if (arr[i+1] != null){
          newArr.push(arr[i+1])
        }
      }
      else if (arr[i] === "--double-prev"){
        if (arr[i-1] != null){
          newArr.push(arr[i-1])
        }
        else continue;
      }
      else if (arr[i] === "--discard-next"){
        if (arr[i+1] != null){
          i = i+2;
        }
      }
      else if (arr[i] ==="--discard-prev") {
        if (arr[i-1] != null && arr[i-2] != "--discard-next") {
          newArr.pop();
        }
      }  
     else newArr.push(arr[i]);
    }
  }
  else throw new Error('\'arr\' parameter must be an instance of the Array!');
  return newArr;
}

module.exports = {
  transform
};
