// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {
    arr.sort((a, b) => { return b - a; });
    return arr[0] * arr[1];
};
