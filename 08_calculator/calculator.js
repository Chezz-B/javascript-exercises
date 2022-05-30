"use strict";

const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let result = 0;
  arr.forEach(n => result += n);
  return result;
};

const multiply = function(...n) {
  // console.log(n[0][0]);
  let result = 1;
  const arr = n[0];
  for(let i = 0; i < arr.length; i++){
    result *= arr[i]
  };
  return result;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(x) {
  if(x == 0) return 1;
	let result = x;
  for(let i = 1; i < x; i++){
    result *= i;
  }
  return result;
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
