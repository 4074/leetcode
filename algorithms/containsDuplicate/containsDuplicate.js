/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var obj = {};
    for(var i=0, len=nums.length; i<len; i++){
        if(obj[nums[i]] === true){
            return true;
        }
        obj[nums[i]] = true;
    }
    return false;
};

// Runtime: 164ms 
// Beats 78.39% of javascript submissions