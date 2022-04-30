// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

var arrayIntersection = function(arr1, arr2) {
    var outputArr = [];
    for(var i = 0; i < arr2.length; i++) {
        if(arr1.indexOf(arr2[i]) !== -1) {
            outputArr.push(arr1[arr1.indexOf(arr2[i])]);
        }
    }
    console.log(outputArr);
    return outputArr;
};
