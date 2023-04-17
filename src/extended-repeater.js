const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.separator){
    options.separator = '+'
  }
  if (options.addition === undefined){
    options.addition = '';
  }
  if(!options.repeatTimes){
    options.repeatTimes = 1
  }
  if(!options.additionRepeatTimes){
    options.additionRepeatTimes = 1
  }
  if(!options.additionSeparator){
    options.additionSeparator = '|'
  }
  if (typeof str !== 'string'){
    str=String(str);
  }
  if (typeof options.addition !== 'string'){
    options.addition=String(options.addition);
  }
  const array = Array(options.repeatTimes).fill(str + Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator));
  return array.join(options.separator);
}

module.exports = {
  repeater
};
