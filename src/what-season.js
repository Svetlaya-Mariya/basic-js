const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let season = "";
  if (date){
    if (Object.prototype.toString.call(date) !== "[object Date]") {
      throw new Error()
    }
    else{
      let month = date.getMonth();
      console.log("month = " + month);
      (month == 0 || month == 1 || month == 11) ?  season = "winter" :
      (month == 2 || month == 3 || month == 4) ?  season = "spring" :
      (month == 5 || month == 6 || month == 7) ?  season = "summer" :
      season = "autumn";
    }
  }
  else season = "Unable to determine the time of year!"

  console.log("date = " + date);
  console.log(season);
  return season;
};
