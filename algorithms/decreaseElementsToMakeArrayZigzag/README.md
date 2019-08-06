### [1144\. Decrease Elements To Make Array Zigzag](https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/)

Difficulty: **Medium**


Given an array `nums` of integers, a _move_ consists of choosing any element and **decreasing it by 1**.

An array `A` is a _zigzag array_ if either:

*   Every even-indexed element is greater than adjacent elements, ie. `A[0] > A[1] < A[2] > A[3] < A[4] > ...`
*   OR, every odd-indexed element is greater than adjacent elements, ie. `A[0] < A[1] > A[2] < A[3] > A[4] < ...`

Return the minimum number of moves to transform the given array `nums` into a zigzag array.

**Example 1:**

```
Input: nums = [1,2,3]
Output: 2
Explanation: We can decrease 2 to 0 or 3 to 1.
```

**Example 2:**

```
Input: nums = [9,6,1,6,2]
Output: 4
```

**Constraints:**

*   `1 <= nums.length <= 1000`
*   `1 <= nums[i] <= 1000`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function(nums) {
    var even = 0, odd = 0, left, right, step
    for (var i=0; i<nums.length; i++) {
        left = undefined
        right = undefined
        if (i-1 >= 0) {
            left = nums[i] - nums[i-1] + 1
        }
        if (i+1 < nums.length) {
            right = nums[i] - nums[i+1] + 1
        }
        
        if (left !== undefined && right !== undefined) {
            step = Math.max(left, right)
        } else {
            step = left || right
        }
        step = Math.max(0, step) || 0
        
        if (i%2) {
            even += step
        } else {
            odd += step
        }
    }
    
    return Math.min(even, odd)
};
```