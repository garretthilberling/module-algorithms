// Write code to return the largest number in the given array
var maxNum = function(arr) {
    return Math.max(...arr);
};

// var maxNum = function(arr) {
//     return arr.sort(function(a, b) {
//         return a - b
//     })[arr.length - 1]; 
// }

// var maxNum = function(arr) {
//     var firstInt = arr[0]
//     for (var i = 1; i < arr.length; i++) {
//         if (firstInt < arr[i]) {
//             firstInt = arr[i];
//         }
//     } return firstInt;
// }