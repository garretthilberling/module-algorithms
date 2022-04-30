// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverseInPlace = (arr) => {
    for(var i = 0; i < arr.length; i++) {
        arr.splice(i, 0, arr.pop());
    }
    console.log(arr);
    return arr;
};
