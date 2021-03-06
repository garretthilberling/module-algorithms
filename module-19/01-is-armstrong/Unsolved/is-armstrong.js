// Write a function that takes a positive integer and returns true if the integer is an armstrong number, else return false. To find out if a number is an armstrong number, take each individual digit and raise it to the power of the length of the entire number and add the digits. If the sum equals the original number, the number is an armstrong number

var isArmstrong = function(num) {
    let arr = Array.from(String(num), Number);

    let armstrong = arr.map(number => {
        return Math.pow(number, arr.length);
    }).reduce((a, b) => a + b, 0);

    if (armstrong === num) {
        return true;
    }
    return false;
};
