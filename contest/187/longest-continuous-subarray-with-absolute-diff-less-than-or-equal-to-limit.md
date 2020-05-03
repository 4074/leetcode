### [1438\. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/)

Difficulty: **Medium**


Given an array of integers `nums` and an integer `limit`, return the size of the longest continuous subarray such that the absolute difference between any two elements is less than or equal to `limit`_._

In case there is no subarray satisfying the given condition return 0.

**Example 1:**

```
Input: nums = [8,2,4,7], limit = 4
Output: 2 
Explanation: All subarrays are: 
[8] with maximum absolute diff |8-8| = 0 <= 4.
[8,2] with maximum absolute diff |8-2| = 6 > 4\. 
[8,2,4] with maximum absolute diff |8-2| = 6 > 4.
[8,2,4,7] with maximum absolute diff |8-2| = 6 > 4.
[2] with maximum absolute diff |2-2| = 0 <= 4.
[2,4] with maximum absolute diff |2-4| = 2 <= 4.
[2,4,7] with maximum absolute diff |2-7| = 5 > 4.
[4] with maximum absolute diff |4-4| = 0 <= 4.
[4,7] with maximum absolute diff |4-7| = 3 <= 4.
[7] with maximum absolute diff |7-7| = 0 <= 4\. 
Therefore, the size of the longest subarray is 2.
```

**Example 2:**

```
Input: nums = [10,1,2,4,7,2], limit = 5
Output: 4 
Explanation: The subarray [2,4,7,2] is the longest since the maximum absolute diff is |2-7| = 5 <= 5.
```

**Example 3:**

```
Input: nums = [4,2,2,2,4,4,2,2], limit = 0
Output: 3
```

**Constraints:**

*   `1 <= nums.length <= 10^5`
*   `1 <= nums[i] <= 10^9`
*   `0 <= limit <= 10^9`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    const n = nums.length
    if (n === 0) return 0
    
    const tree = new BinarySearchTree(true)
    let left = 0, right = 0
    let ans = 0
    
    while (right < n) {
        tree.insert(nums[right])
        
        let min = tree.min()
        let max = tree.max()
        
        while (max - min > limit) {
            tree.delete(nums[left])
            left += 1
            min = tree.min()
            max = tree.max()
        }
        
        ans = Math.max(ans, right - left + 1)
        
        right += 1
    }
    
    return ans
};
    
class BinarySearchTree {
    constructor(isSet = false) {
        this.root = null
        this.leftFirst = true
​
        this.isSet = isSet
        this.counter = new Map()
    }
​
```