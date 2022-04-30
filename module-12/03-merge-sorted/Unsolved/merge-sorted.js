// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) {
    let newArr = [];
    let sort1 = 0;
    let sort2 = 0;
    
    while(sort1 < arr1.length && sort2 < arr2.length) {
        let num1 = arr1[sort1];
        let num2 = arr2[sort2];

        if(num1 < num2) {
            newArr.push(num1);
            sort1++;
        } else {
            newArr.push(num2);
            sort2++;
        }
    }

    while(sort1 < arr1.length) {
        let num = arr1[sort1];
        newArr.push(num);
        sort1++;
    }

    while(sort2 < arr2.length) {
        let num = arr2[sort2];
        newArr.push(num);
        sort2++;
    }

    console.log(newArr);
    return newArr;

};
