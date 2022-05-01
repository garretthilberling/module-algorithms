// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique

const minIncrement = function(nums) {
    let unique = {};
    let increment = 0;
    for(let i = 0; i < nums.length; i++) {
        while(unique[nums[i]] === true) {
            nums[i] += 1;
            increment++;
        }
        unique[nums[i]] = true;
    }
    return increment;
};
