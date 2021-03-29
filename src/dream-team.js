const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
 let arr = [];
 let str;
 if (Array.isArray(members) == false){
    str = false;
  } 
else {
   for (let items of members){
    if  (typeof items !== "string") { 
      str = false
    }
    else {
      items = items.trim();
      arr.push(items[0].toUpperCase());
    }
  }
  arr.sort();
  console.log("arr = " + arr);
  str = arr.join("");
 
}
console.log("str = " + str);
 return str;
};
