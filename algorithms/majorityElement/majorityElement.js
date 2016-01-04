/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var obj = {};
    var len = nums.length;
    for(var i=0; i<len; i++){
        obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
        if(obj[nums[i]] > len/2) return nums[i];
    }
};

// Runtime: 152ms
// Beats 94.44% of javascript submissions