const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
let res = {}
 let turns = Math.pow(2, disksNumber) - 1;
 let k = turnsSpeed/3600;
 let seconds = Math.floor(turns/k);
 res = {"turns" : turns, 
        "seconds" : seconds};
 return res;
};
