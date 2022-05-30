const palindromes = function (str) {
  const strNoSpace = str.replaceAll(" ", "").replaceAll(".", "").replaceAll(",", "").replaceAll("!", "");

  const arr = strNoSpace.toLowerCase().split("");
  const reverseArr = arr.slice().reverse();
  
  if(arr.join() == reverseArr.join()) return true
  else return false;
};

// Do not edit below this line
module.exports = palindromes;
