const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor(){
    this.level = 0;
    this.counter = 0;
  } 
  calculateDepth(arr) {
    arr.forEach(elem => {
      if(Array.isArray(elem)){
        this.counter++;
        this.level = 0;
        this.calculateDepth(elem);
        //this.level = 0;
      }
      else return;
      if (this.counter > this.level){
          this.level = this.counter;
          this.counter = 0;
      }
      else this.counter = 0;
    return this.level;
    });
    return this.level+1;
  }
};