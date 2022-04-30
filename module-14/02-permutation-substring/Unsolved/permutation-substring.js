// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var permutationSubstring = function(str, sub) {
    
    for (var i = 0; i < sub.length; i++) {
        var re = new RegExp(sub[i])
        if(!str.match(re)) {
            return false;
        } else {
            console.log(str);
            str = str.split(re).join('');
            console.log(str);
        }
    }
    return true;
};
