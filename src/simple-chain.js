const CustomError = require("../extensions/custom-error");
 const chainMaker = {
  arr : [],
  getLength() {
   return this.arr.length;
  },
  addLink(value) {
    if (value === undefined){
      this.arr.push(`( )`);
    }
    else this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!this.arr[position - 1]){
      this.arr.length = 0;
      throw new Error();
    }
    else {
      this.arr.splice(position-1, 1);
      return this;
    }
  },
  reverseChain() {
   this.arr.reverse();
   return this;
  },
  finishChain() {
  if(this.arr.length === 0){
    throw new Error();
  }
  else {
    let result = this.arr.join("~~");
    this.arr = [];
    return result;
    }
  }
};
console.log(chainMaker);
module.exports = chainMaker;
