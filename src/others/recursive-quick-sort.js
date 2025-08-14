/**
 * @param {number[]} nums
 * @return {number[]}
 */
var quickSort = function(nums) {
    if(nums.length < 2) {
        return nums;
    } else {
        const pivot = nums[0];
        let smaller = [];
        let bigger = [];

        for(let i = 1; i < nums.length; i++) {
            if(nums[i] < pivot) {
                smaller.push(nums[i]);
            } else {
                bigger.push(nums[i]);
            }
        }

        return [...quickSort(smaller), pivot, ...quickSort(bigger)]
    }
};

module.exports = quickSort;