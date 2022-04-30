// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function(str) {
    let count0 = 0;
    let count1 = 0;
    let strArr = str.split('');
    
    for(let i = 0; i < str.length; i++) {
        if(strArr[i] === '0') {
            count0++;
        } else if (strArr[i] === '1') {
            count1++;
        }
    }

    if(count0 === count1) {
        return true;
    }

    return false;
};
