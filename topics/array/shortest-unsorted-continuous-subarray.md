### [581\. Shortest Unsorted Continuous Subarray](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/)

Difficulty: **Medium**  

Related Topics: [Array](https://leetcode.com/tag/array/)


Given an integer array `nums`, you need to find one **continuous subarray** that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

Return _the shortest such subarray and output its length_.

**Example 1:**

```
Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
```

**Example 2:**

```
Input: nums = [1,2,3,4]
Output: 0
```

**Example 3:**

```
Input: nums = [1]
Output: 0
```

**Constraints:**

*   `1 <= nums.length <= 10<sup>4</sup>`
*   `-10<sup>5</sup> <= nums[i] <= 10<sup>5</sup>`

**Follow up:** Can you solve it in `O(n)` time complexity?

#### Solution

Language: **JavaScript**

**Two Pointers**

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let left = 0
    while (left < nums.length - 1) {
        if (nums[left] > nums[left + 1]) break
        left += 1
    }
    
    let right = nums.length - 1
    const rightMap = new Map()
    while (right > 0) {
        if (nums[right] < nums[right - 1]) break
        right -= 1
    }
    
    if (left >= right) return 0
    
    let min = nums[left]
    let max = nums[left]
    for (let i = left + 1; i <= right; i += 1) {
        min = Math.min(min, nums[i])
        max = Math.max(max, nums[i])
    }
    
    while (left >= 0 && nums[left] > min) {
        left -= 1
    }
    
    while (right < nums.length && nums[right] < max) {
        right += 1
    }
    
    return right - left - 1
};
```

**Mono Stack**
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    const n = nums.length
    if (n < 2) return 0
    
    let stack = [0]
    
    let left = n
    for (let i = 1; i < nums.length; i += 1) {
        if (nums[i] < nums[stack[stack.length - 1]]) {
            while (stack.length && nums[i] < nums[stack[stack.length - 1]]) {
                stack.pop()
            }
            left = Math.min(left, stack.length ? stack[stack.length - 1] : -1)
        }
        stack.push(i)
    }
    
    if (left === n) return 0
    
    let right = -1
    stack = [n - 1]
    for (let i = n - 2; i >= 0; i -= 1) {
        if (nums[i] > nums[stack[stack.length - 1]]) {
            while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
                stack.pop()
            }
            right = Math.max(right, stack.length ? stack[stack.length - 1] : n)
        }
        stack.push(i)
    }
    
    return right - left - 1
};
```