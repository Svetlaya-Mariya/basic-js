const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    try {
        if (typeof(str) === 'object') {
            str = '' + str;
        } else {
            str = str.toString();
        }
    } catch (err) {
        if (str === null) {
            str = 'null';
        }
    }
    if (!options){
        return '';
    }
    else {
        if (!options.repeatTimes){
            options.repeatTimes = 1;
        }
        if (options.addition && !options.additionRepeatTimes){
            options.additionRepeatTimes = 1;
          }
          else if (!options.additionRepeatTimes){
            options.additionRepeatTimes = 0;
        }
   
        if (!options.separator){
            options.separator = '+';
        }
        if (!options.additionSeparator){
           options.additionSeparator = '|';
       }
       try {
           if (typeof(options.addition) === 'object') {
                 options.addition = '' + options.addition;
             } else {
                 options.addition = options.addition.toString();
               }
           } catch (err) {
               if (options.addition === null) {
                   options.addition = 'null';
               }
             }
     }
   
     let addStr = options.addition + options.additionSeparator;
    let repeatAddStr = addStr.repeat(options.additionRepeatTimes);
 
    let str1 = "";
    for(let i=0; i<repeatAddStr.length-options.additionSeparator.length; i++){
      str1 +=repeatAddStr[i];
    }
   // console.log("str1 = " + str1);
   let resStr = str + str1 + options.separator;
   console.log("res = " + resStr);
   let repeatResStr = resStr.repeat(options.repeatTimes);
   console.log("rep = " + repeatResStr);
   // let additionString = addition.repeat()
   let str2 = "";
   for(let i=0; i<repeatResStr.length-options.separator.length; i++){
     str2 +=repeatResStr[i];
   }
   console.log("resulr = " + str2);
   return str2;
   };
  