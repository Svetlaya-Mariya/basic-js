const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  let cat = "^^";
  let arr = [];
  matrix.forEach(item => {arr.push(item.join(","))})
  arr = arr.join(',').split(",");
  for (let i=0; i<arr.length; i++){
    if (arr[i]==cat) {count++};
  }
  return count;
};
