// Write a function that takes in two sorted arrays and returns a pair of numbers (one from each array) with the smallest difference

var smallestDifference = function(arr1, arr2) {
    let a = 0;
    let b = 0;
    let bestPair = [];
    var bestDiff = Infinity

    while(a < arr1.length && b < arr2.length) {
        let aVal = arr1[a];
        let bVal = arr2[b];
        let currentDiff = Math.abs(bVal - aVal);
        if(currentDiff < bestDiff) {
            bestDiff = currentDiff;
            bestPair = [aVal, bVal];

            if(bestDiff === 0) {
                return bestPair;
            }
        }

        if(aVal < bVal) {
            a++;
        } else if(aVal > bVal) {
            b++;
        }
        console.log(bestPair);
    }
    return bestPair;
};
