/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var count = 0;
    var len = nums.length;
    
    for(var i=0; i<len; i++){
        if(nums[i] === 0){
            count ++;
        }else if(count){
            nums[i-count] = nums[i];
        }
    }
    
    while(count > 0){
        nums[len-count] = 0;
        count --;
    }
};

// Runtime: 172ms 
// Beats 27.20% of javascript submissions