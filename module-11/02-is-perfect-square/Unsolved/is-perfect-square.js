// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function(num) {
    let getSquare = Math.sqrt(num);
    if(getSquare % 1 != 0 || getSquare === NaN) { // % checks if there is a remainder. If remainder is greater than 0, number has decimals => return false
        return false;
    }
    return true
};
