const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];
  if (arr && Array.isArray(arr)){
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
    console.log("arr = " + arr);
    console.log("new = " + newArr);
  }
  else throw new Error();
/*console.log(arr);
console.log(newArr);*/
  return newArr;
};
