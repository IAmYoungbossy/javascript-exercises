const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function([...arg]) {
	return arg.reduce((a,b) => a + b, 0);
};

const multiply = function([...arg]) {
  return arg.reduce((a,b) => a * b);
};

const power = function(base, power) {
	return Math.pow(base,power)
};

const factorial = function(number) {
	let factorial = 1;
  for (let i = number; i !== 0; i--){
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
