const sumAll = function(a, b) {
  if (a < 0 || b < 0) return "ERROR";
  if (typeof a !== "number" || typeof b !== "number") return "ERROR";

  let sum = a + b;
  if (a < b){
    for (let i = a + 1; i < b; i++){
      sum += i;
    }
  } else {
    for (let i = b + 1; i < a; i++){
      sum += i;
    }
  }


  return sum;
};

// Do not edit below this line
module.exports = sumAll;
