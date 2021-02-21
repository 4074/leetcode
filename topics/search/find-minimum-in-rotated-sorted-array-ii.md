### [154\. Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/)

Difficulty: **Hard**  

Related Topics: [Array](https://leetcode.com/tag/array/), [Binary Search](https://leetcode.com/tag/binary-search/)


Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  `[0,1,2,4,5,6,7]` might become  `[4,5,6,7,0,1,2]`).

Find the minimum element.

The array may contain duplicates.

**Example 1:**

```
Input: [1,3,5]
Output: 1
```

**Example 2:**

```
Input: [2,2,2,0,1]
Output: 0
```

**Note:**

*   This is a follow up problem to .
*   Would allow duplicates affect the run-time complexity? How and why?


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0, right = nums.length - 1
    
    while (left < right) {
        const middle = Math.floor((left + right) / 2)
        if (nums[middle] > nums[right]) {
            left = middle + 1
        } else if (nums[middle] < nums[right]) {
            right = middle
        } else {
            right -= 1
        }
    }
    
    return nums[left]
};
```