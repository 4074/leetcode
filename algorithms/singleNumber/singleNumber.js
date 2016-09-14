/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for (var i=0; i<nums.length; i++) {
        var hasMatch = false;
        for (var j=i+1; j<nums.length; j++) {
            if (nums[i] == nums[j]) {
                hasMatch = true;
                nums.splice(j, 1);
                break;
            }
        }
        if (!hasMatch) {
            return nums[i];
        }
    }
};
