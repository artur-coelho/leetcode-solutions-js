function search(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const guess = nums[mid];

        if(guess === target) {
            return mid;
        } else if(guess > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

module.exports = search;