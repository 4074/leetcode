### [81\. Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/)

Difficulty: **Medium**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Binary Search](https://leetcode.com/tag/binary-search/)


Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., `[0,0,1,2,2,5,6]` might become `[2,5,6,0,0,1,2]`).

You are given a target value to search. If found in the array return `true`, otherwise return `false`.

**Example 1:**

```
Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
```

**Example 2:**

```
Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
```

**Follow up:**

*   This is a follow up problem to , where `nums` may contain duplicates.
*   Would this affect the run-time complexity? How and why?


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    const n = nums.length
    let left = 0, right = n - 1
    
    while (left < right) {
        const middle = Math.floor((left + right) / 2)
        const num = nums[middle]
        
        if (num === target) return true
        if (num === nums[left]) {
            left += 1
            continue
        }
        if (num === nums[right]) {
            right -= 1
            continue
        }
        
        if (num > nums[left]) {
            // Left part
            if (target > num || target < nums[left]) {
                left = middle + 1
            } else {
                right = middle
            }
        } else {
            // Right Part
            if (target > nums[right] || target < num) {
                right = middle
            } else {
                left = middle + 1
            }
        }
    }
    
    return nums[left] === target
};
```