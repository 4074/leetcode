/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
       var start = nums.length - 2, index
       var sortStart = 0
       
       var max = nums[nums.length - 1]
       while (start >= 0) {
           if (nums[start] >= max) {
               max = nums[start]
           } else {
               sortStart = start + 1
               break
           }
           
           start --
       }
       
       start = sortStart
       while (sortStart < nums.length) {
           index = sortStart + 1
           while (index < nums.length) {
               if (nums[index] < nums[sortStart]) {
                   var n = nums[index]
                   nums[index] = nums[sortStart]
                   nums[sortStart] = n
               }
               index ++
           }
           
           sortStart ++
       }
       
       for (index = start; index < nums.length; index ++) {
           if (nums[index] > nums[start - 1]) {
               var n = nums[index]
               nums[index] = nums[start - 1]
               nums[start - 1] = n
               break
           }
       }
   };