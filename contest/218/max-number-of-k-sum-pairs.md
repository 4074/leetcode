### [1679\. Max Number of K-Sum Pairs](https://leetcode.com/problems/max-number-of-k-sum-pairs/)

Difficulty: **Medium**  

Related Topics: [Hash Table](https://leetcode.com/tag/hash-table/)


You are given an integer array `nums` and an integer `k`.

In one operation, you can pick two numbers from the array whose sum equals `k` and remove them from the array.

Return _the maximum number of operations you can perform on the array_.

**Example 1:**

```
Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.
```

**Example 2:**

```
Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.
```

**Constraints:**

*   `1 <= nums.length <= 10<sup>5</sup>`
*   `1 <= nums[i] <= 10<sup>9</sup>`
*   `1 <= k <= 10<sup>9</sup>`


#### Solution

Language: **JavaScript**


```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    const counts = {}
    
    for (const num of nums) {
        counts[num] = (counts[num] || 0) + 1
    }
    
    let ans = 0
    for (const key of Object.keys(counts)) {
        const num = parseInt(key)
        if (counts[num] && counts[k - num]) {
            if (k - num === num) {
                ans += Math.floor(counts[num] / 2)
            } else {
                ans += Math.min(counts[num], counts[k - num])
            }
            counts[num] = 0
            counts[k - num] = 0
        }
    }
    
    return ans
};
```

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    const counts = {}
    
    let ans = 0
    for (const num of nums) {
        const diff = k - num
        if (counts[diff]) {
            ans += 1
            counts[diff] -= 1
        } else {
            counts[num] = (counts[num] || 0) + 1
        }
    }
    
    return ans
};
```