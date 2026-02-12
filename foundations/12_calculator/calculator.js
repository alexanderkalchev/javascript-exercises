const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	return nums.reduce((sum, num) => sum += num, 0);
};

const multiply = function(nums) {
  return nums.reduce((acc, num) => acc *= num)
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
  let res = 1;
  for(let i = 2; i <= num; i++){
    res *= i;
  }
  return res;
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
