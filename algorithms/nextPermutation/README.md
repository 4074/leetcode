### [31\. Next PermutationCopy for Markdown](https://leetcode.com/problems/next-permutation/)

Difficulty: **Medium**


Implement **next permutation**, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

`1,2,3` → `1,3,2`  
`3,2,1` → `1,2,3`  
`1,1,5` → `1,5,1`


#### Solution

Language: **JavaScript**

```javascript
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
```