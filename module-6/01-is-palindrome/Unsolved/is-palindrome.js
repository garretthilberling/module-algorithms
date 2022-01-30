// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome
var isPalindrome = function(str) {
    var reverseStr = str.split('').reverse().join('');
    console.log(reverseStr);
    if (reverseStr === str) {
        return true;
    } else {
        return false;
    }
};
