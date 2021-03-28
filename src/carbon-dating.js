const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  throw new CustomError('Not implemented');
  let t, k, m, res;
    if (sampleActivity === ""){
      res = false;
    }
    else if (sampleActivity && typeof sampleActivity == 'string'){
      k = Math.log(2)/HALF_LIFE_PERIOD;
      m = Math.log(MODERN_ACTIVITY/sampleActivity);
      if (isNaN(m) == true || m == Infinity){
        res = false;
      }
      else {
          t = Math.ceil(m/k);
          (t>0) ? res = t : res = false;
      }
    }
    else res = false;
    return res;
};
