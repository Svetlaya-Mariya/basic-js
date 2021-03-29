const CustomError = require("../extensions/custom-error");
 const chainMaker = {
  arr : 0,
  getLength() {
    let len = arr.length;
   return len;
  },
  addLink(value) {
    /*if (value === undefined){
     // throw new Error();
    }*/
    this.arr.push("(" + value + ")~~");
    return this;
  },
  removeLink(position) {
    this.arr.splice(position-1, 1);
    return this;
  },
  reverseChain() {
   this.arr.reverse();
   return this;
  },
  finishChain() {
    return this;
  }
};
console.log(arr);

module.exports = chainMaker;
