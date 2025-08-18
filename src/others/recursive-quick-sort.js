/**
 * @param {number[]} nums
 * @return {number[]}
 */
function quickSort(nums) {
    if(nums.length < 2) {
        return nums;
    } else {
        const pivotIndex = Math.floor(Math.random() * nums.length);
        const pivot = nums[pivotIndex];
        const smaller = [];
        const bigger = [];
        const pivotArray = [];

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] < pivot) {
                smaller.push(nums[i]);
            } else if(nums[i] > pivot){
                bigger.push(nums[i]);
            } else {
                pivotArray.push(nums[i]);
            }
        }

        return [...quickSort(smaller), ...pivotArray, ...quickSort(bigger)]
    }
};

module.exports = quickSort;