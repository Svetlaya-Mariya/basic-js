const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (sampleActivity && typeof sampleActivity == 'string'){
    const k = Math.log(2)/HALF_LIFE_PERIOD;
    const m = Math.log(MODERN_ACTIVITY/sampleActivity);
    if (isNaN(m) !== true && m != Infinity){
      const t = Math.ceil(m/k)
        if (t>0) return t
    }
  }
  return false;
}

module.exports = {
  dateSample
};
