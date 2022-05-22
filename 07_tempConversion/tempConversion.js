const ftoc = function(fahrenheitTemp) {
  let ftoc;
  let ftocResult;
  ftoc = (fahrenheitTemp - 32) * (5/9);
  ftocResult = Math.round(ftoc * 10)/10;
  return ftocResult;
};

const ctof = function(celciusTemp) {
  let ctof;
  let ctofResult;
  ctof = (celciusTemp * (9/5)) + 32;
  ctofResult = Math.round(ctof * 10)/10;
  return ctofResult;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
