function search(nums, target) {
    function recursiveBinarySearch(left, right) {
        const mid = Math.floor((left + right) / 2);
        if(right < left) return -1;
        if(nums[mid] === target) return mid;
        if(nums[mid] > target) return recursiveBinarySearch(left, mid - 1);
        return recursiveBinarySearch(mid + 1, right);
    }

    return recursiveBinarySearch(0, nums.length - 1);
}

module.exports = search;