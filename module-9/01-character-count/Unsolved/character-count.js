// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
    let charCount = {};

    for (var i = 0; i < str.length; i++) {
        var char = str[i];

        if(char in charCount) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    return charCount;
};
