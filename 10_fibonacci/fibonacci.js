const fibonacci = function(x) {
  if(x < 1) return "OOPS";
  if(x == 1) return 1
  else if(x == 2) return 1
  else {
    const arr = [1,1];
    for(let i = 2; i < x; i++){
      let current = arr[i-1] + arr[i-2];
      arr.push(current)
    }
    console.log(arr);
    console.log(arr[x-1]);
    return arr[x-1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
