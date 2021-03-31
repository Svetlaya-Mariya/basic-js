const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor(){
    this.level = 1;
    this.counter = 0;
  } 
  calculateDepth(arr) {
    arr.forEach(elem => {
      this.level = 0;
      if(Array.isArray(elem)){
        this.counter++;
        //this.level = 0;
        this.calculateDepth(elem);
      }
      else return;
       if (this.counter > this.level){
          this.level = this.counter;
          this.counter = 0;
      }
      else this.counter = 0;
    return this.level+1;
    });
    return this.level+1;
  }
};