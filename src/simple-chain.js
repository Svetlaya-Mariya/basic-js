const CustomError = require("../extensions/custom-error");
 const chainMaker = {
  arr : [],
  getLength() {
   return this.arr.length;
  },
  addLink(value) {
    if (value === undefined){
      throw new Error();
    }
    else this.arr.push(value);
  return this;
  },
  removeLink(position) {
    if (this.arr[position - 1] === undefined || typeof position !== "number"){
      throw new Error();
    }
    else this.arr.splice(position-1, 1);
    return this;
  },
  reverseChain() {
   this.arr.reverse();
   return this;
  },
  finishChain() {
    let result = this.arr.reduce((acc, el, i) => {
      if (i === 0) {
        acc += `( ${el} )`;
        return acc;
      } else {
        acc += `~~( ${el} )`;
        return acc;
      }
    }, "");
    this.arr = [];
    return result;
  }
};
console.log(chainMaker);
module.exports = chainMaker;
