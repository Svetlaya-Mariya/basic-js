const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const arr = n.split('-');
  const regExp = /^[0-9A-F]{2}$/;
  let result;
  let res = 1;
  for (let i = 0; i < arr.length; i++) {
    res = 0;
    if (regExp.test(arr[i]) === false) {
      result = false;
      break;
    } else res = 1;
  }
  if (res === 1) {
    result = true;
  }
  return result;
}
module.exports = {
  isMAC48Address
};
