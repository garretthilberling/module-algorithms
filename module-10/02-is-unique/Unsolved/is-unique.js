// TODO: Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
    tempArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(tempArr[arr[i]]) {
            return false;
        }
        tempArr[arr[i]] = true;
    }
    return true;
};