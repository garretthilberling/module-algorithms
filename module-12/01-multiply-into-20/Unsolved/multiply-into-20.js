const multiplyInto20 = function(arr) {
  // TODO: Write Your Code Here
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(arr[i] * arr[j] === 20) {
        return true;
      }
    }
  }
  return false;
};
